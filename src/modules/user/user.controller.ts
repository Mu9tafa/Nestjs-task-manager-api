import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return users;
  }

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userService.signUp(createUserDto);
    return user;
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto): Promise<UserEntity> {
    const user = await this.userService.signIn(signInDto);
    return user;
  }
}
