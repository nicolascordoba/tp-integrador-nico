import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoFavoritosPage } from './listado-favoritos';

@NgModule({
  declarations: [
    ListadoFavoritosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoFavoritosPage),
  ],
})
export class ListadoFavoritosPageModule {}
