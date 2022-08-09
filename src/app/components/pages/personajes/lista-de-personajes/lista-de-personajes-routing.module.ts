import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDePersonajesComponent } from './lista-de-personajes.component';

const routes: Routes = [{ path: '', component: ListaDePersonajesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaDePersonajesRoutingModule { }
