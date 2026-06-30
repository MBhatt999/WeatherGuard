import { Controller, Post } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(
    private readonly telegramService: TelegramService,
  ) {}

  @Post('send')
  async sendMessage() {
    return this.telegramService.sendMessage(
      '✅ WeatherGuard Test Message from NestJS'
    );
  }
}