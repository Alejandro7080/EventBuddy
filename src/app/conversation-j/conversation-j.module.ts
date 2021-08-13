import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversationJPageRoutingModule } from './conversation-j-routing.module';

import { ConversationJPage } from './conversation-j.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversationJPageRoutingModule
  ],
  declarations: [ConversationJPage]
})
export class ConversationJPageModule {}
