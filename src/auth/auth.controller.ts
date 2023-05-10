import {
  Controller,
  Post,
  Body,
  UseFilters,
  ForbiddenException,
  Req,
  UseGuards,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLogin } from 'src/types';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { Request } from 'express';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
@UseFilters(new HttpExceptionFilter())
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: UserLogin): Promise<{ token: string }> {
    const token = await this.authService.generateToken(user);

    if (!token) {
      throw new ForbiddenException('you are not a system admin');
    }

    return { token };
  }

  @UseGuards(AuthGuard)
  @Post('user')
  async create(@Req() req: Request, @Body() pass: { password: string }) {
    try {
      const user = await req['user'];

      return await this.authService.createPassword(
        user.username,
        pass.password,
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
