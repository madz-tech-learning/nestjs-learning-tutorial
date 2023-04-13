import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!123';
  }

  getSomething(): string {
    return 'Something can be sent back';
  }
}
