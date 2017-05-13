import { Component, Input }  from '@angular/core';

import { formGroupItem }     from '../../implements/seeds/formGroupItem';

import { buttonItem }        from './../../implements/seeds/buttonItem';

/**
 * Generated class for the Form component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'form',
  templateUrl: 'form.html'
})
export class Form {

  @Input() seed:formGroupItem = new formGroupItem();

  constructor() {
   
  }

  action(bt:buttonItem = new buttonItem()){
  	bt.action();
  }

}
