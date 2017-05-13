import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampaignPage } from './campaign';

@NgModule({
  declarations: [
    CampaignPage,
  ],
  imports: [
    IonicPageModule.forChild(CampaignPage),
  ],
  exports: [
    CampaignPage
  ]
})
export class CampaignPageModule {}
