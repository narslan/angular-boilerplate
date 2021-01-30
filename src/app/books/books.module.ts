import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';


@NgModule({
  declarations: [CollectionPageComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
