import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';

@Module({
  imports: [ConfigModule],
  controllers: [TelegramController],
  providers: [TelegramService],
  exports: [TelegramService],   // ⭐ IMPORTANT
})
export class TelegramModule {}