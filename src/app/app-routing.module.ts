import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'listaDePersonajes', loadChildren: () => import('./components/pages/personajes/lista-de-personajes/lista-de-personajes.module').then(m => m.ListaDePersonajesModule) },
  { path: 'detallesPersonaje/:id', loadChildren: () => import('./components/pages/personajes/detalles-personaje/detalles-personaje.module').then(m => m.DetallesPersonajeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
