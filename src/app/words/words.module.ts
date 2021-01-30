import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordsRoutingModule } from './words-routing.module';
import { TextPageComponent } from './containers/text-page/text-page.component';


@NgModule({
  declarations: [TextPageComponent],
  imports: [
    CommonModule,
    WordsRoutingModule
  ]
})
export class WordsModule { }
