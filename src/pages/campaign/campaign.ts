import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Campaign } from "../../implements/interfaces/campaign";

// @IonicPage()
@Component({
	selector: 'page-campaign',
	templateUrl: 'campaign.html',
})
export class CampaignPage {
	private campaign: Campaign;

	constructor(private navCtrl: NavController, private navParams: NavParams) {
		this.campaign = navParams.get('campaign');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CampaignPage');
	}

}
