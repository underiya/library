import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('api')
export class AppController {
  constructor(
    @Inject('USER_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    try {
      await this.kafkaClient.connect();
      this.kafkaClient.subscribeToResponseOf('user.created');
    } catch (error) {
      console.error('Error initializing Kafka clients', error);
    }
  }
  async onModuleDestroy() {
    await this.kafkaClient.close();
  }

  @Post('signup')
  createOrder(@Body() body: Record<string, any>) {
    this.kafkaClient.emit<Record<string, any>>('user.created', {
      key: null,
      value: body,
    });

    return { response: 'user created Successfully', body };
  }

  @Get()
  getDetails() {
    return { 'msg:': 'test' };
  }
}
