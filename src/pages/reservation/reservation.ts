import { FilmInfoPage } from './../film-info/film-info';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Films } from '../../app/films';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ResumencompraPage } from '../resumencompra/resumencompra';

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
  buttonColor: String
  minDate : String;
  fontColor : String = "#ffffff";
  horaElegida : Number;
  haveSesion : Boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

    this.film = this.navParams.get("film");
    var dateYear = new Date().toISOString;
    this.minDate = dateYear.toString(); 
    
  }

  selectHour(hour){
    this.haveSesion = true;
    this.horaElegida = hour;
    
    
  }

  buttonColour (sesion) : String{
    if (this.horaElegida == sesion)
    return "secondary";
    else
    return "primary";

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }


  showInfo(Films){
    
        //Cambiar vista (PUSH)
        this.navCtrl.push(FilmInfoPage,{film:Films});
        
      }

  //Cogido de la API de IONIC :)
  presentPrompt(Films) {
    let alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Please Log in to buy your tickets! Antonio Djigo',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            
             this.navCtrl.push(ResumencompraPage,{film:Films});
            
            
          }
        }
      ]
    });
    alert.present();
  }

}
