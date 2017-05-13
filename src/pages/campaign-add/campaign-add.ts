import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Campaign } from "../../implements/interfaces/campaign";

// @IonicPage()
@Component({
	selector: 'page-campaign',
	templateUrl: 'campaign-add.html',
})
export class CampaignAddPage {
	private campaign: Campaign;

	constructor(private navCtrl: NavController, private navParams: NavParams) {
		this.campaign = {
			titulo: '',
			descripcion: '',
			objetivo: null,
			imagen: ''
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CampaignPage');
	}

	private campaignAdd() {

	}

}
