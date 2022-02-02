import { Module } from '@nestjs/common';
import { SupplementResolver } from './resolvers/supplement.resolver';

@Module({
  providers: [SupplementResolver],
})
export class SupleModule {}
