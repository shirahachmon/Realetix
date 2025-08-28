import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return { ok: true, service: 'Realetix API' };
  }
}
