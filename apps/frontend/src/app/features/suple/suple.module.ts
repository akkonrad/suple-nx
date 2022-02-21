import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupleCreateFormComponent } from './suple-create-page/suple-create-form/suple-create-form.component';
import { SupleCreatePageComponent } from './suple-create-page/suple-create-page.component';
import { SupleRoutingModule } from './suple-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SupleListPageComponent } from './suple-list-page/suple-list-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SupleCreateFormComponent,
    SupleCreatePageComponent,
    SupleListPageComponent
  ],
  imports: [
    CommonModule,
    SupleRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SupleModule {
}
