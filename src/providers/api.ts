import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {
	public serve:string = "http://192.168.0.31/hhrosario/api/";

  	constructor(public http: Http) {}

  	private request(path:string = "",method:string = "get",body:any = {},headers:any = {}){
  		return new Promise(( resolve, reject) => {
  			console.log(this.serve+path,method);
        headers['Content-type'] = 'application/json';
        let h                   = new Headers(headers);
        let options             = new RequestOptions({ 'headers': h });
  			this.http[method](this.serve+path,body,options)
  			.map((resp) => {return resp.json;})
  			.subscribe(
  				resp => {
  					resolve(resp);
  				},
  				error => {
  					reject(error);
  				}
			);
  		});
  	}

  	public get(path:string = "",body:any = {}){
  		return new Promise(( resolve, reject) => {
  			this.request(path,'get',body)
  			.then(
  				data =>{
  					reject(data);
  				},
  				error =>{
  					resolve(error);
  				}
			)
  		});
  	}

  	public post(path:string = "", body:any = {}){
  		return new Promise(( resolve, reject) => {
  			this.request(path,'post',body)
  			.then(
  				data =>{
  					reject(data);
  				},
  				error =>{
  					resolve(error);
  				}
			);
  		});
  	}

  	public delete(path:string = "", body:any = {}){		
  		return new Promise(( resolve, reject) => {
			this.request(path,'delete',body)
			.then(
				data =>{
					reject(data);
				},
				error =>{
					resolve(error);
				}
			)
  		});
  	}

  	public put(path:string = "", body:any = {}){
  		return new Promise(( resolve, reject) => {
  			  			this.request(path,'put',body)
  			  			.then(
  			  				data =>{
  			  					reject(data);
  			  				},
  			  				error =>{
  			  					resolve(error);
  			  				}
  						)
  		});
  	}

}
