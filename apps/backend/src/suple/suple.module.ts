import { Module } from '@nestjs/common';
import { SupplementResolver } from './resolvers/supplement.resolver';
import { SupplementController } from './controllers/supplement.controller';
import { SupleService } from './services/suple.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [SupplementResolver, SupleService],
  controllers: [SupplementController]
})
export class SupleModule {
}
