import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversationJPage } from './conversation-j.page';

const routes: Routes = [
  {
    path: '',
    component: ConversationJPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversationJPageRoutingModule {}
