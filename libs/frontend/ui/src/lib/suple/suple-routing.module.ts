import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add',
    loadChildren: () => import('./suple-create-page/suple-create-page.module').then(m => m.SupleCreatePageModule)
  }
  // {
  //   path: 'list',
  //   loadChildren: () => import('./suple-create-page/suple-list-page.module').then(m => m.SupleListPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupleRoutingModule {
}
