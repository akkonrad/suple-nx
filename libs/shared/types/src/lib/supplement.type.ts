import { Unit } from './unit.enum';

export interface Supplement {
  name: string;
  description: string;
  ingredients: Ingredient[];
};

export interface Ingredient {
  name: string;
  quantity: number;
  unit: Unit;
}
