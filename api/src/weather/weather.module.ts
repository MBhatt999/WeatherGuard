import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { TelegramModule } from '../telegram/telegram.module';

@Module({
  imports: [
    ConfigModule,
    TelegramModule,
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}