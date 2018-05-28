import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { PeliculasProvider } from '../../providers/peliculas/peliculas';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public datosBusqueda: any;
  public buscandoPeliculas: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public peliculasProvider: PeliculasProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private ngZone: NgZone,) {
    this.datosBusqueda = {};
    this.buscandoPeliculas = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public buscarPelicula(): void {
    if (!this.datosBusqueda.texto) {
      let toastError = this.toastCtrl.create({
        message: 'Ingrese texto por favor',
        duration: 1500,
        position: 'bottom'
      });
      toastError.present();
      return;
    }
    this.buscandoPeliculas = true;
    let loading = this.loadingCtrl.create({ content: 'Buscando película..' });
    loading.present();

    this.peliculasProvider.buscarPelicula(this.datosBusqueda.texto).then(
      (success) => { this.successBuscarPelicula(success, loading) },
      (error) => { this.errorBuscarPelicula(error, loading) });
  }

  private successBuscarPelicula(resultado, loading): void {
    this.buscandoPeliculas = false;
    loading.dismiss();
    let data = {
      peliculasLista: resultado
    };
    this.navCtrl.push('listado-peliculas', data);
    console.log('successBuscarPelicula', resultado);
  }

  private errorBuscarPelicula(error, loading): void {
    this.buscandoPeliculas = false;
    loading.dismiss();
    console.log('errorBuscarPelicula', error);
  }

}
