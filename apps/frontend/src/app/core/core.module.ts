import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

// #TODO: move this to lib
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    NavigationComponent,
    ToolbarComponent
  ],
  imports: [
    MenubarModule,
    RouterModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    NavigationComponent,
    ToolbarComponent
  ]
})
export class CoreModule {
}
