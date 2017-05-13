
	import { Injectable } from '@angular/core';

	import { Api }        from './api';

	@Injectable()
	
	export class SessionProvider {

	constructor(public api:Api) {}


	login(mail:string = "", password:string = ""){
		return new Promise((resolve, reject) => {
			this.api.post('login/',{
				email: mail,
				password: password
			})
			.then(
				(res) => {
					console.log(res)
					resolve(res);
				},
				error => {
					console.log(error);
					reject(error);
				}
			)
		})
	}
}
