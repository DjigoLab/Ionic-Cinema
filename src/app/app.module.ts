import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FilmInfoPage } from './../pages/film-info/film-info';
import { ReservationPage } from '../pages/reservation/reservation';
import { ResumencompraPage } from '../pages/resumencompra/resumencompra';
//Añadir paginas aquí

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilmInfoPage,
    ReservationPage,
    ResumencompraPage
    //Añadir paginas aquí
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilmInfoPage,
    ReservationPage,
    ResumencompraPage
    //Añadir paginas aquí
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
