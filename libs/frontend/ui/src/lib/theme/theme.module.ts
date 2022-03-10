import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const primeModules = [
  InputTextModule,
  DropdownModule,
  InputTextareaModule,
  MenubarModule,
  ButtonModule,
  BadgeModule
];

@NgModule({
  declarations: [],
  imports: [
    ...primeModules,
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    ...primeModules,
    FontAwesomeModule
  ]
})
export class ThemeModule {
}
