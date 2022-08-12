import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class taskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsOptional()
  statusId: number;
}
