import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { formGroupItem } from '../../implements/seeds/formGroupItem';

import { formItem }      from '../../implements/seeds/formItem';

import { buttonItem }    from '../../implements/seeds/buttonItem';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
	public seed:formGroupItem = new formGroupItem();
  	
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  	let buttons:Array<buttonItem>    = [];
  	let actions:Array<buttonItem>    = [];
  	let inputList:Array<formItem>    = [];
  	
  	// inputs
  	let email:formItem = new formItem('email','','email','Ingrese su mail');
  	let pass:formItem  = new formItem('password','','password','Ingrese su password');
  	
  	//buttons
  	let login:buttonItem = new buttonItem('Login','danger',()=>{
  		console.log('In your face');
  	});

  	//actions
  	let forgot:buttonItem = new buttonItem('Olvidaste tu password ?','danger',()=>{
  		console.log('in your face');
  	});
  	let signup:buttonItem = new buttonItem('Eres nuevo? Crea tu cuenta aqui.','danger',()=>{
  		console.log('in your face');
  	});

  	actions.push(forgot);

  	actions.push(signup);
  	
  	buttons.push(login);

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
  }

}
