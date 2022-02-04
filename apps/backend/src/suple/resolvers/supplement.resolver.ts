import { Query, Resolver } from '@nestjs/graphql';
import { ReadSupplementDto } from '../dtos/supplement.dto';
import { Supplement } from '../types/supplement.type';
import { DatabaseService } from '../../database/services/database.service';
import { Inject } from '@nestjs/common';
import * as Neode from 'neode';

// Just import the DatabaseModule and use @Inject('DATABASE') to inject the database where you need it

@Resolver()
export class SupplementResolver {
  constructor(private readonly db: DatabaseService,
              @Inject('Connection') private conn: Neode) {
  }

  @Query(/* istanbul ignore next */ () => [Supplement])
  async getAllSupplements(): Promise<ReadSupplementDto[]> {
    console.log('this.conn', this.conn);
    console.log('getAllSupplements()', this.db.connection);
    const suple = await this.db.connection.all('Supplement');
    console.log('suple: ', suple);
    return (await suple.toJson()) as ReadSupplementDto[];
  }

  // async createUser(dto: CreateUserDto): Promise<void> {
  //   // note that on example my interface has id and isFirstAuth attributes, and my Dto not.
  //   // Generate id
  //   const id: string = uuid();
  //   // Set isFirstAuth
  //   const isFirstAuth: boolean = true;
  //
  //   await this.neode.merge('User', { ...dto, id, isFirstAuth });
  // }
}
