import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({
    message: 'First name must be string',
  })
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsOptional()
  email?: string;
}
