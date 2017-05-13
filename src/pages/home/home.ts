import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampaignPage } from "../campaign/campaign";
import { CampaignAddPage } from "../campaign-add/campaign-add";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	private campaigns;

	constructor(private navCtrl: NavController) {
		this.campaigns = [
			{
				id: 1,
				image: "http://lorempixel.com/400/200/?v=1",
				title: 'Titulo de Campaña 1',
				detail: 'Detalle de la campaña 1'
			},
			{
				id: 2,
				image: "http://lorempixel.com/400/200/?v=2",
				title: 'Titulo de Campaña 2',
				detail: 'Detalle de la campaña 2'
			},
			{
				id: 3,
				image: "http://lorempixel.com/400/200/?v=3",
				title: 'Titulo de Campaña 3',
				detail: 'Detalle de la campaña 3'
			},
			{
				id: 4,
				image: "http://lorempixel.com/400/200/?v=4",
				title: 'Titulo de Campaña 4',
				detail: 'Detalle de la campaña 4'
			},
			{
				id: 5,
				image: "http://lorempixel.com/400/200/?v=5",
				title: 'Titulo de Campaña 5',
				detail: 'Detalle de la campaña 5'
			},
			{
				id: 6,
				image: "http://lorempixel.com/400/200/?v=6",
				title: 'Titulo de Campaña 6',
				detail: 'Detalle de la campaña 6'
			}
		];

		console.log(this.campaigns);
	}

	private campaignAdd() {
		this.navCtrl.push(CampaignAddPage);
	}

	private campaignDetail(campaign) {
		this.navCtrl.push(CampaignPage, {
			campaign: campaign
		});
	}

}
