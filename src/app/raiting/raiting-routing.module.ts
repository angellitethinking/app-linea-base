import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaitingPage } from './raiting.page';

const routes: Routes = [
  {
    path: '',
    component: RaitingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaitingPageRoutingModule {}
