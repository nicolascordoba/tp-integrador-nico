import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListadoFavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado-favoritos',
  templateUrl: 'listado-favoritos.html',
})
export class ListadoFavoritosPage {
  public favoritos: any[];
  public localStorage: Storage;
  public arrayFavoritos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.favoritos = [];
    this.localStorage = (window as any).localStorage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoFavoritosPage');
  }

  // public recuperarfavoritos(favoritos): void{
  //   let peliculasFavoritos = JSON.parse(this.localStorage.getItem('favoritos')); 

  //   peliculasFavoritos = this.localStorage.setItem('favoritos',JSON.stringify(favoritos));

  // }





}
