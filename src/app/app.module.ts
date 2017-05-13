import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }          from './app.component';

import { AboutPage }      from '../pages/about/about';
import { ContactPage }    from '../pages/contact/contact';
import { HomePage }       from '../pages/home/home';

import { StatusBar }      from '@ionic-native/status-bar';
import { SplashScreen }   from '@ionic-native/splash-screen';


import { HttpModule, JsonpModule } from '@angular/http';


  //Pages
  import { Login}       from '../pages/login/login';
  import { Forgot }     from '../pages/forgot/forgot';
  import { Signup }     from '../pages/signup/signup';
  

  //Components
  import { Form } from '../components/form/form';


  //Providers
  import { Api }  from '../providers/api';
  import { SessionProvider } from '../providers/session-provider';
  
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Login,
    Form,
    Forgot,
    Signup
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Login,
    Forgot,
    Signup
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Api,
    SessionProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
