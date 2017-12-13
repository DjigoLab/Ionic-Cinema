import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmInfoPage } from './film-info';

@NgModule({
  declarations: [
    FilmInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmInfoPage),
  ],
})
export class FilmInfoPageModule {}
