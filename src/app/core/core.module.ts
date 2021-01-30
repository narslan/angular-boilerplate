import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FomanticUIModule } from 'ngx-fomantic-ui';
import {
  AppComponent
} from 'src/app/core/containers';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundPageComponent } from './containers/not-found-page.component';


export const COMPONENTS = [
  AppComponent,
  LayoutComponent,
  NotFoundPageComponent,
]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule, RouterModule, FomanticUIModule
  ],
  exports: COMPONENTS
})
export class CoreModule { }
