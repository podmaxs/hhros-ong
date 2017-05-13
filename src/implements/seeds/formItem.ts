export class formItem {
	
	private events        = {};
	public  log:string    = "";
	public  error:boolean = false;
	constructor(public name:string, public value:string, public type:string = "text", public placeholder:string = "") {}

	get(){
		if(this.events['onGet'])
			this.events['onGet'](this.value);
		if(this.type == 'numbre')
			return parseInt(this.value);
		return this.value;
	}

	public on(eventName:string = "",call:any = ()=>{}){
		this.events[eventName] = call;
	}
}