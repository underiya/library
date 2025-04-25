import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/entities/user.entity';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @EventPattern('user.created')
  async signup(@Payload() data: Partial<UserEntity>) {
    const res = await this.userService.createUser(data);
    console.log('response', res);
    return { message: 'User created!' };
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
