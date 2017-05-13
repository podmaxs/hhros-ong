import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Form } from './form';

@NgModule({
  declarations: [
    Form,
  ],
  imports: [
    IonicPageModule.forChild(Form),
  ],
  exports: [
    Form
  ]
})
export class FormModule {}
