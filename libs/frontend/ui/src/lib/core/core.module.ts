import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class CoreModule {
}
