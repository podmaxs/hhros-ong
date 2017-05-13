import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { formGroupItem }                       from '../../implements/seeds/formGroupItem';

import { formItem }                            from '../../implements/seeds/formItem';

import { buttonItem }                          from '../../implements/seeds/buttonItem';

import { Signup }                              from '../../pages/signup/signup';

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class Forgot {
	public seed:formGroupItem = new formGroupItem();

  	constructor(public navCtrl: NavController, public navParams: NavParams) {

  		  	let buttons:Array<buttonItem>    = [];
  		  	let actions:Array<buttonItem>    = [];
  		  	let inputList:Array<formItem>    = [];
  		  	
  		  	// inputs
  		  	let email:formItem = new formItem('email','','email','Ingrese su mail');
  		  	
  		  	//buttons
  		  	let login:buttonItem = new buttonItem('Recuperar password','danger',()=>{
  		  		console.log('In your face');
  		  	});

  		  	//actions
  		  	let forgot:buttonItem = new buttonItem('Ingresar con otra cuenta','danger',()=>{
  		  		this.navCtrl.pop();
  		  	});
  		  	let signup:buttonItem = new buttonItem('Eres nuevo? Crea tu cuenta aqui.','danger',()=>{
  		  		this.navCtrl.push(Signup);
  		  	});

  		  	actions.push(forgot);

  		  	actions.push(signup);
  		  	
  		  	buttons.push(login);

  		  	inputList.push(email);


  		   	this.seed = new formGroupItem(
  		   		'Ingrese su mail para recuperar el password',
  		   		inputList,
  		   		buttons,
  		   		actions
  			);
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgot');
  }

}
