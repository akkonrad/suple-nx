import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { environment } from '../environments/environment';
import { join } from 'path';
// const graphqlModules = [];

const IS_DEV_ENV = !environment.production;

@Module({
  imports: [
    GraphQLModule.forRoot({
      // defines folder paths to search for graphql files,
      typePaths: ['./**/schema/*.graphql'],

      // debug values
      debug: IS_DEV_ENV,
      playground: IS_DEV_ENV,

      //  the use of this 'path' property to auto generate the typescript classes or interface based on the GraphQL object types
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts')
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
