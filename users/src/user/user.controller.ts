import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() data: Partial<UserEntity>) {
    return await this.userService.createUser(data);
  }

  @Post('login')
  async login(@Body() data: Partial<UserEntity>) {
    const { email, password } = data;
    if (!email) {
      throw new Error('Email is required');
    }
    if (!password) {
      throw new Error('Password is required');
    }

    return await this.userService.login(email, password);
  }
}
