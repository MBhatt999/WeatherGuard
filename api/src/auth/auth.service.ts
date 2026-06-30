import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async login(profile: any) {
    const user = await this.usersService.createOrUpdate(profile);

    const token = this.jwtService.sign({
      id: user._id,
      email: user.email,
    });

    return {
      token,
      user,
    };
  }
}