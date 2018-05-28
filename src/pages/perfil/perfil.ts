import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage({
  name: 'perfil'
})
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public user: any;
  modified = false;
  localStorage: Storage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private toastCtrl: ToastController
    
  ) {
    this.localStorage = (window as any).localStorage;
    // Si no esta almacenado el usuario
    this.user = {
      fecNacimiento: '',
      nombre: '',
      apellido: '',
      notificaciones: false,
      email: '',
      fotoPerfil: ''

    };
  }

  ionViewDidLoad() {
    this.modified = false;
   console.log('didload');
    let usr:any = JSON.parse(this.localStorage.getItem('user'));
    console.log('Usr',usr);
      if (usr != null)  this.user = usr;
    
   
  }
  ionViewDidEnter(){
    this.modified = false;
  }

  private guardarCambios(){
    this.localStorage.setItem('user',JSON.stringify(this.user));
    this.mostrarToast(2000,'Guardado exitosamente','bottom');
    this.modified = false;  
  }

  private modificado() {
    this.modified = true;    
  }

  public sacarFoto(): void {
    let options: CameraOptions = {
      quality: 60,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.user.fotoPerfil = base64Image;
      this.modificado();
    }, (err) => {
      // Handle error
    });
  }

  public abrirGaleria(): void {
    let options: CameraOptions = {
      quality: 60,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.user.fotoPerfil = base64Image;
      this.modificado();
    }, (err) => {
      // Handle error
    });

}
  private mostrarToast(duracion:number,mensaje:string, posicion:string): void{
    
  let modalError = this.toastCtrl.create({
  duration: duracion,
  message: mensaje,
  position: posicion,
  });
 modalError.present();}
}
