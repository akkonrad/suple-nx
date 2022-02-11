import { Controller, Get, Param } from '@nestjs/common';

@Controller('supplements')
export class SupplementController {

  constructor() {
  }

  @Get()
  findAll() {
    return { hello: 'yello' };
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns a #${params.id} supplement`;
  }
}
