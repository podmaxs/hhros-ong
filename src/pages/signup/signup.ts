import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { formGroupItem }                       from '../../implements/seeds/formGroupItem';

import { formItem }                            from '../../implements/seeds/formItem';

import { buttonItem }                          from '../../implements/seeds/buttonItem';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

		public seed:formGroupItem = new formGroupItem();
	  	
	  	constructor(public navCtrl: NavController, public navParams: NavParams) {
	  	
	  	let buttons:Array<buttonItem>    = [];
	  	let actions:Array<buttonItem>    = [];
	  	let inputList:Array<formItem>    = [];
	  	
	  	// inputs
	  	let email:formItem = new formItem('email','','email','Ingrese su mail');
	  	let pass:formItem  = new formItem('password','','password','Ingrese su password');
	  	
	  	//buttons
	  	let signup:buttonItem = new buttonItem('Inscribirme','danger',()=>{
	  		console.log('In your face');
	  	});

	  	//actions
	  	let back:buttonItem = new buttonItem('Ingresar con mi cuenta','danger',()=>{
	  		this.navCtrl.pop();
	  	});

	  	actions.push(back);
	  	
	  	buttons.push(signup);

	  	inputList.push(email);
	  	inputList.push(pass);


	   	this.seed = new formGroupItem(
	   		'Ingrese con su cuenta',
	   		inputList,
	   		buttons,
	   		actions
	    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

}
