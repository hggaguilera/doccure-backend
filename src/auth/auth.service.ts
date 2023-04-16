import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/services/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserLogin } from 'src/types';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async generateToken(login: UserLogin): Promise<string> {
    const doctor = await this.prisma.person.findUnique({
      where: { email: login.username },
      select: { id: true, firstName: true, lastName: true },
    });

    const user = await this.prisma.user.findUnique({
      where: { personId: doctor.id },
    });

    if (this.checkPassword(login.password, user.password)) {
      const payload = {
        username: login.username,
        name: `${doctor.firstName} ${doctor.lastName}`,
        sub: user.id,
      };
      return this.jwtService.signAsync(payload);
    }
  }

  private async checkPassword(
    password: string,
    passwordHashed: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, passwordHashed);
  }
}
