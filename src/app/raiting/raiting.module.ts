import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaitingPageRoutingModule } from './raiting-routing.module';

import { RaitingPage } from './raiting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaitingPageRoutingModule
  ],
  declarations: [RaitingPage]
})
export class RaitingPageModule {}
