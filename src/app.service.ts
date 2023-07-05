import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  getTransaction(): string {
    return 'Hello World!';
  }
}
