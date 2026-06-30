import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Res } from '@nestjs/common';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleLogin() {}

  @Get('google/callback')
@UseGuards(GoogleAuthGuard)
async googleCallback(@Req() req: any, @Res() res: any) {
 // this.authService.generateJwt(req.user);

  return res.redirect('http://localhost:5173/dashboard');
}
}