import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupleModule } from '@suple/frontend/ui';

const routes: Routes = [
  {
    path: 'suple',
    loadChildren: () => import('@suple/frontend/ui').then(m => m.SupleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false }), SupleModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
