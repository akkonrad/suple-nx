import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { environment } from '../environments/environment';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { SupleModule } from '../suple/suple.module';
import { Neo4jModule } from 'nest-neo4j/dist';
import { Neo4jScheme } from 'nest-neo4j/dist/interfaces/neo4j-config.interface';

const IS_DEV_ENV = !environment.production;

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      // defines folder paths to search for graphql files,
      typePaths: ['./**/schema/*.graphql'],

      // debug values
      debug: IS_DEV_ENV,
      playground: IS_DEV_ENV,

      // path where your automatically generated schema will be created. Alternatively, the schema can be generated on-the-fly in memory
      // autoSchemaFile: join(process.cwd(), 'apps/backend/src/schema/schema.gql'),

      //  the use of this 'path' property to auto generate the typescript classes or interface based on the GraphQL object types
      definitions: {
        path: join(process.cwd(), 'apps/backend/src/schema/graphql.schema.ts')
      },
      include: [SupleModule]
    }),
    Neo4jModule.forRoot({
      scheme: process.env.NEO4J_PROTOCOL as Neo4jScheme,
      host: process.env.NEO4J_HOST,
      port: process.env.NEO4J_PORT,
      username: process.env.NEO4J_USERNAME,
      password: process.env.NEO4J_PASSWORD,
      database: process.env.NEO4J_DATABASE
    }),
    SupleModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule {
}
