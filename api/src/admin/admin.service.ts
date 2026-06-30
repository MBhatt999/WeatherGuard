import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class AdminService {
  constructor(
    private readonly usersService: UsersService,
    private readonly telegramService: TelegramService,
  ) {}

  async approveUser(id: string) {
   const user = await this.usersService.approveUser(id);

if (!user) {
  throw new Error('User not found');
}

    await this.telegramService.sendMessage(
      `🎉 Congratulations ${user.name}!\n\nYour WeatherGuard account has been approved.\nYou will now receive weather alerts on Telegram.`
    );

    return user;
  }

  async getPendingUsers() {
    return this.usersService.getPendingUsers();
  }
  async getStats() {
  return this.usersService.getStats();
}
}