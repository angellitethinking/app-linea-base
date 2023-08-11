import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListHomePageRoutingModule } from './list-home-routing.module';

import { ListHomePage } from './list-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListHomePageRoutingModule
  ],
  declarations: [ListHomePage]
})
export class ListHomePageModule {}
