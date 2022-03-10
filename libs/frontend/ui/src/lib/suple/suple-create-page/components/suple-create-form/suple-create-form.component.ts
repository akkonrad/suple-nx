import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Unit } from '@suple/shared/types';
import { sumBy } from 'lodash-es';

interface DropdownOption {
  value: string;
}

@Component({
  selector: 'front-suple-create-form',
  templateUrl: './suple-create-form.component.html',
  styleUrls: ['./suple-create-form.component.scss']
})
export class SupleCreateFormComponent {

  form: FormGroup;

  units: DropdownOption[] = [{ value: Unit.G }, { value: Unit.ML }];

  lastUnit = Unit.G;

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  get ingredientsSum() {
    return sumBy(this.form.value.ingredients, 'quantity');
  }

  constructor(private fb: FormBuilder) {

    // TODO: use provided input for the ingredient
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.fb.array([
        this.addIngredientFormControl()
      ])
    });
  }

  addIngredient() {
    this.ingredients.push(this.addIngredientFormControl());
  }

  submitForm() {
    console.log('form submit: ', this.form.value);
  }

  handleUnitChange(optionChange: { value: Unit }) {
    this.lastUnit = optionChange.value;
  }

  private addIngredientFormControl() {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      unit: [{ value: this.lastUnit }, Validators.required]
    });
  }
}
