import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';

const primeModules = [
  InputTextModule,
  InputTextareaModule,
  MenubarModule,
  ButtonModule,
  BadgeModule
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
