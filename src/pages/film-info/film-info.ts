import { ReservationPage } from './../reservation/reservation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Films } from '../../app/films';

/**
 * Generated class for the FilmInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film-info',
  templateUrl: 'film-info.html',
})
export class FilmInfoPage {

  film:Films;

//Cambiar de pagina (RECEPTOR)
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.get("film");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmInfoPage');
  }


  makeReservation(film){
    
        //Cambiar vista (PUSH)
        this.navCtrl.push(ReservationPage,{film:Films});
        
      }
    

}
