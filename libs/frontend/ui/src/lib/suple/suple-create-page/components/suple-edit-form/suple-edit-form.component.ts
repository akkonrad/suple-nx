import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Ingredient, Mode, Supplement, Unit } from '@suple/shared/types';
import { isNil, sumBy } from 'lodash-es';
import { SupleFormGroup } from '../../types/suple-form-group';

@Component({
  selector: 'front-suple-edit-form',
  templateUrl: './suple-edit-form.component.html',
  styleUrls: ['./suple-edit-form.component.scss']
})
export class SupleEditFormComponent {

  form!: SupleFormGroup;
  mode = Mode;

  mockIngredient: Ingredient = {
    name: 'MDMA',
    quantity: 50,
    unit: Unit.ML
  };

  mockSuple: Supplement = {
    name: 'test name',
    description: 'lorem pisum',
    ingredients: [this.mockIngredient, this.mockIngredient]
  };

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  get ingredientsSum() {
    return sumBy(this.form.value.ingredients, 'quantity');
  }

  constructor(private fb: FormBuilder) {
    this.form = new SupleFormGroup(this.mockSuple);
  }

  // TODO: put this into isControlValid decorator
  isInvalid(controlName: string): boolean {
    if (isNil(this.form.get(controlName))) {
      return true;
    }
    return !this.form.get(controlName)!.valid && this.form.get(controlName)!.dirty;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(this.addIngredientFormControl(ingredient));
  }

  handleIngredientDelete(index: number) {
    this.removeIngredient(index);
  }

  private removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  submitForm() {
    console.log('form submit: ', this.form.value);
  }


  private addIngredientFormControl(ingredient?: Ingredient) {
    // TODO: add ingredient validator SUM <= 100
    return this.fb.control({
      name: ingredient?.name,
      quantity: ingredient?.quantity,
      unit: ingredient?.unit || Unit.G
    });
  }
}
