import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('posts')
export class PostController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
