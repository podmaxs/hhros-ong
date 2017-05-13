import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { formGroupItem }                       from '../../implements/seeds/formGroupItem';

import { formItem }                            from '../../implements/seeds/formItem';

import { buttonItem }                          from '../../implements/seeds/buttonItem';

import { Forgot }                              from '../../pages/forgot/forgot';

import { Signup }                              from '../../pages/signup/signup';

import { SessionProvider }                     from '../../providers/session-provider';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
	public seed:formGroupItem = new formGroupItem();
  	
  	constructor(public session:SessionProvider, public navCtrl: NavController, public navParams: NavParams) {
  	
  	let buttons:Array<buttonItem>    = [];
  	let actions:Array<buttonItem>    = [];
  	let inputList:Array<formItem>    = [];
  	
  	// inputs
  	let email:formItem = new formItem('email','','email','Ingrese su mail');
  	let pass:formItem  = new formItem('password','','password','Ingrese su password');
  	
  	//buttons
  	let login:buttonItem = new buttonItem('Login','danger',()=>{
  		this.open();
  	});

  	//actions
  	let forgot:buttonItem = new buttonItem('Olvidaste tu password ?','danger',()=>{
  		this.navCtrl.push(Forgot);
  	});
  	let signup:buttonItem = new buttonItem('Eres nuevo? Crea tu cuenta aqui.','danger',()=>{
  	    this.navCtrl.push(Signup);
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

  open(){
    let form = this.seed.get();
    console.log(form);
    this.session.login(form['email'],form['password'])
    .then(
      me => {
        console.log(me);
      },
      error =>{
        console.log(error);
      }
    )
  }
  ionViewDidLoad() {
  }

}
