import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextPageComponent } from './containers/text-page/text-page.component';

const routes: Routes = [
  {
    path: '',
    component: TextPageComponent,
    data: { title: 'Text Page' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsRoutingModule { }
