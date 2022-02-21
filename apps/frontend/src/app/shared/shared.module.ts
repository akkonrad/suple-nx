import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

const primeModules = [
  InputTextModule,
  InputTextareaModule,
  ButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...primeModules
  ],
  exports: [...primeModules]
})
export class SharedModule {
}
