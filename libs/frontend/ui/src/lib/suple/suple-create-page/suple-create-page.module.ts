import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupleCreatePageComponent } from './suple-create-page.component';
import { SupleEditFormComponent } from './components/suple-edit-form/suple-edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '@suple/frontend/ui';
import { RouterModule } from '@angular/router';
import { IngredientFormControlComponent } from './components/ingredient-form-control/ingredient-form-control.component';

@NgModule({
  declarations: [SupleCreatePageComponent, SupleEditFormComponent, IngredientFormControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: SupleCreatePageComponent
      }
    ])
  ]
})
export class SupleCreatePageModule {
}
