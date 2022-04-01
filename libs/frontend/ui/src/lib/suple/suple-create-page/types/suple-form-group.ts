import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
      ingredients: new FormArray(supleFormData?.ingredients.map(ingredient => new FormControl(ingredient)) || [])
    });
  }
}
