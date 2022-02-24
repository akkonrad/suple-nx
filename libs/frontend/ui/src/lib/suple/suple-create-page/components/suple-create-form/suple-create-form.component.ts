import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'front-suple-create-form',
  templateUrl: './suple-create-form.component.html',
  styleUrls: ['./suple-create-form.component.scss']
})
export class SupleCreateFormComponent {

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {
  }

}
