import { FilmInfoPage } from './../film-info/film-info';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Films } from '../../app/films';


/**
 * Generated class for the ResumencompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resumencompra',
  templateUrl: 'resumencompra.html',
})
export class ResumencompraPage {

  film:Films
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.film = this.navParams.get("film");
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumencompraPage');
  }

}
