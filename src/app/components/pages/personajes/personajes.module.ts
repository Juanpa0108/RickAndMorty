import { ListaDePersonajesComponent } from '@personajes/lista-de-personajes/lista-de-personajes.component';
import { DetallesPersonajeComponent } from '@personajes/detalles-personaje/detalles-personaje.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const myDeclaration = [DetallesPersonajeComponent, ListaDePersonajesComponent]

@NgModule({
  declarations: [ ... myDeclaration],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports:[... myDeclaration]
})
export class PersonajesModule { }
