import { IsEnum } from 'class-validator';

export class UpdateUserStatusDto {
  @IsEnum(['PENDING', 'APPROVED'])
  status!: string;
}