import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Supplement {
  @Field()
  _id: string;
  @Field()
  name: string;
  @Field()
  description: string;
}
