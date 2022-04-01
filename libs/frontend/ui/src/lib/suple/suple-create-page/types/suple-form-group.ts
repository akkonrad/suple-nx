import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Ingredient } from '@suple/shared/types';

interface SupleFormData {
  name: string;
  description: string;
  ingredients: Ingredient[];
}

export class SupleFormGroup extends FormGroup {
  constructor(private supleFormData?: SupleFormData) {
    super({
      name: new FormControl(supleFormData?.name, Validators.required),
      description: new FormControl(supleFormData?.description, Validators.required),
      ingredients: new FormArray(supleFormData?.ingredients.map(ingredient => new FormControl(ingredient)) || [], validateFieldSumEqual())
    });
  }
}

const validateFieldSumEqual = (): ValidationErrors => {
  return (formArray: FormArray): null | { error: string } => {
    let sum: number = 0;
    formArray.controls.forEach((control: AbstractControl) => sum += control.value.quantity);
    return sum <= 100 ? null : { error: 'Overall quantity needs to be less than 100' };
  };
};
