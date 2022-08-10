import { ListaDePersonajesComponent } from '@personajes/lista-de-personajes/lista-de-personajes.component';
import { DetallesPersonajeComponent } from '@personajes/detalles-personaje/detalles-personaje.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[]
})
export class PersonajesModule { }
