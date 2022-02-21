import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupleCreatePageComponent } from './suple-create-page/suple-create-page.component';
import { SupleListPageComponent } from './suple-list-page/suple-list-page.component';


const routes: Routes = [
  {
    path: 'add',
    component: SupleCreatePageComponent
  },
  {
    path: '',
    component: SupleListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupleRoutingModule {
}
