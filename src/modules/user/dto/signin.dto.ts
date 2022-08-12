import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsString({
    message: 'First name must be string',
  })
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
