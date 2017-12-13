import { FilmInfoPage } from './../film-info/film-info';
import { Cartelera } from './../../app/cartelera';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cartelera:Cartelera;

  constructor(public navCtrl: NavController) {

    this.cartelera =  new Cartelera;

  }

  showInfo(Films){

    //Cambiar vista (PUSH)
    this.navCtrl.push(FilmInfoPage,{film:Films});
    
  }

}
