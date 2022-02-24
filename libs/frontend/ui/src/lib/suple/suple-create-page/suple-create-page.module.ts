import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupleCreatePageComponent } from './suple-create-page.component';
import { SupleCreateFormComponent } from './components/suple-create-form/suple-create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../theme/theme.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SupleCreatePageComponent, SupleCreateFormComponent],
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
