import { Inject, Injectable } from '@nestjs/common';
import * as Neode from 'neode';

@Injectable()
export class DatabaseService {
  constructor(@Inject('Connection') private readonly neode: Neode) {
  }

  get connection() {
    return this.neode;
  }
}
