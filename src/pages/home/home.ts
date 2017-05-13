import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampaignPage } from "../campaign/campaign";
import { CampaignAddPage } from "../campaign-add/campaign-add";
import { Campaign } from "../../implements/interfaces/campaign";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	private campaigns: Campaign[];

	constructor(private navCtrl: NavController) {
		this.campaigns = [
			{
				id_campanias: 1,
				imagen: "http://lorempixel.com/400/200/?v=1",
				titulo: 'Titulo de Campaña 1',
				objetivo: 0,
				descripcion: 'Detalle de la campaña 1'
			},
			{
				id_campanias: 2,
				imagen: "http://lorempixel.com/400/200/?v=2",
				titulo: 'Titulo de Campaña 2',
				objetivo: 0,
				descripcion: 'Detalle de la campaña 2'
			},
			{
				id_campanias: 3,
				imagen: "http://lorempixel.com/400/200/?v=3",
				titulo: 'Titulo de Campaña 3',
				objetivo: 0,
				descripcion: 'Detalle de la campaña 3'
			},
			{
				id_campanias: 4,
				imagen: "http://lorempixel.com/400/200/?v=4",
				titulo: 'Titulo de Campaña 4',
				objetivo: 0,
				descripcion: 'Detalle de la campaña 4'
			},
			{
				id_campanias: 5,
				imagen: "http://lorempixel.com/400/200/?v=5",
				titulo: 'Titulo de Campaña 5',
				objetivo: 0,
				descripcion: 'Detalle de la campaña 5'
			},
			{
				id_campanias: 6,
				imagen: "http://lorempixel.com/400/200/?v=6",
				titulo: 'Titulo de Campaña 6',
				objetivo: 0,
				descripcion: 'Detalle de la campaña 6'
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
