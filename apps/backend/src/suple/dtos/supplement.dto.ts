import { Supplement } from '../types/supplement.type';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSupplementDto implements Partial<Supplement> {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  label: string;
}

export class ReadSupplementDto implements Partial<Supplement> {
  id: string;
  name: string;
  description: string;
  label: string;
}
