import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Films } from '../../app/films';

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  film: Films;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.film = this.navParams.get("film");
    

  }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

}
