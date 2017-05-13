import { formItem }   from './formItem';
import { buttonItem } from './buttonItem';

export class formGroupItem {
	public error:boolean = false;

	constructor(public title:string = "", public inputs:Array<formItem> = [], public buttons:Array<buttonItem> = [],public actions:Array<buttonItem> = []) {}

	get(){
		let list:any = {};
		for(let l in this.inputs){
			list[this.inputs[l].name] = this.inputs[l].get();
			if(!this.error)
				this.error = this.inputs[l].error;
		}
		return list;
	}
}