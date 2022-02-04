import { Controller, Get, Param } from '@nestjs/common';
import { SupleService } from '../services/suple.service';

@Controller('supplements')
export class SupplementController {

  constructor(private supleService: SupleService) {
  }

  @Get()
  findAll() {
    return { hello: 'yello' };
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} supplement`;
  }
}
