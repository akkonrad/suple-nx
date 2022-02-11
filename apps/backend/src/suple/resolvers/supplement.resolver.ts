import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Supplement } from '../types/supplement';
import { Neo4jService } from 'nest-neo4j/dist';
import { QueryResult } from 'neo4j-driver';
import { CreateSupplementDto } from '../dtos/supplement.dto';
import { v4 as uuidv4 } from 'uuid';

@Resolver()
export class SupplementResolver {
  constructor(private readonly db: Neo4jService) {
  }

  @Query(() => Supplement)
  async getAllSupplements(): Promise<Supplement[]> {
    return this.db.read(`MATCH (n:Supplement) RETURN n`)
      .then((result: QueryResult) => {

        return result.records.map(item => {
          return {
            ...item.get('n').properties
          };
        });

      });
  }

  @Mutation()
  async createSupplement(@Args('input') supplement: CreateSupplementDto) {
    const keys = Object.keys(supplement);
    const parsedInput = '{' + keys.map(key => {
      return `${key}: $${key}`;
    }).join(',') + ', id: $id}';

    const cypher = `CREATE (sup:Supplement ${parsedInput}) RETURN sup`;

    const params = { id: uuidv4(), ...supplement };

    return this.db.write(cypher, params);
  }
}
