import { Module } from '@nestjs/common';
import { NeodeModule } from 'neode-nestjs';

import { DatabaseService } from './services/database.service';

@Module({
  imports: [
    NeodeModule.forRoot()
  ],
  providers: [
    DatabaseService
  ],
  exports: [DatabaseService]
})
export class DatabaseModule {
}
