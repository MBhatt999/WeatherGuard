import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class WeatherService {
  constructor(
    private readonly telegramService: TelegramService,
    private readonly configService: ConfigService,
  ) {}

  @Cron('*/1 * * * *')
  async sendWeatherAlert() {
    try {
      const apiKey = this.configService.get<string>('WEATHER_API_KEY');
      const city = this.configService.get<string>('CITY');

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
      );

      const weather = response.data;

      const message = `
🌦 WeatherGuard Alert

📍 City: ${weather.name}

🌡 Temperature: ${weather.main.temp}°C

☁ Condition: ${weather.weather[0].main}

💧 Humidity: ${weather.main.humidity}%

💨 Wind Speed: ${weather.wind.speed} m/s
`;

      await this.telegramService.sendMessage(message);

      console.log('Weather alert sent');
    } catch (error) {
      console.log(error);
    }
  }
}