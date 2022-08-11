import { ListaDePersonajesComponent } from '@personajes/lista-de-personajes/lista-de-personajes.component';
import { DetallesPersonajeComponent } from '@personajes/detalles-personaje/detalles-personaje.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const myDeclaration = [DetallesPersonajeComponent, ListaDePersonajesComponent]

@NgModule({
  declarations: [ ... myDeclaration],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[... myDeclaration]
})
export class PersonajesModule { }
