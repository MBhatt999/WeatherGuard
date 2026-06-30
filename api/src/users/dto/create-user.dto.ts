import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  provider!: string;

  @IsOptional()
  @IsEnum(['USER', 'ADMIN'])
  role?: string;

  @IsOptional()
  @IsEnum(['PENDING', 'APPROVED'])
  status?: string;

  @IsOptional()
  @IsString()
  telegramChatId?: string;
}