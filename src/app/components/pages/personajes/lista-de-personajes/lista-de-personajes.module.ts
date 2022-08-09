import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDePersonajesRoutingModule } from './lista-de-personajes-routing.module';
import { ListaDePersonajesComponent } from './lista-de-personajes.component';


@NgModule({
  declarations: [
    ListaDePersonajesComponent
  ],
  imports: [
    CommonModule,
    ListaDePersonajesRoutingModule
  ]
})
export class ListaDePersonajesModule { }
