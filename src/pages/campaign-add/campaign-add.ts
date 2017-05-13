import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// @IonicPage()
@Component({
	selector: 'page-campaign',
	templateUrl: 'campaign-add.html',
})
export class CampaignAddPage {
	private campaign;

	constructor(private navCtrl: NavController, private navParams: NavParams) {
		this.campaign = navParams.get('campaign');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CampaignPage');
	}

}
