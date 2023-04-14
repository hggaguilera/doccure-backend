import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLogin } from 'src/types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: UserLogin): Promise<{ token: string }> {
    const token = await this.authService.generateToken(user);
    return { token };
  }
}
