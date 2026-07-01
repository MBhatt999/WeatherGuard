import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(configService: ConfigService) {
    super({
  clientID: configService.get<string>('GOOGLE_CLIENT_ID')!,
  clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET')!,
  callbackURL: 'https://weatherguard-ijs5.onrender.com/auth/google/callback',
  scope: ['email', 'profile'],
});
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ) {
    return profile;
  }
}