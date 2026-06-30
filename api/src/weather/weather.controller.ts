import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly weatherService: WeatherService,
  ) {}

  @Get('test')
  async testWeather() {
    await this.weatherService.sendWeatherAlert();

    return {
      message: 'Weather alert sent',
    };
  }
}