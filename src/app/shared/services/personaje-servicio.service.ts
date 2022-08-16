import { Personaje } from './../interface/personaje.interface';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonajeServicioService {

  constructor(private http:HttpClient) { }

  buscarPersonaje(query="", page = 1)
  {

    return this.http.get<Personaje[]>(`${environment.baseUrlAPI}/?name=${query}&page=${page} `)

  }
  darDetalles(id:number)
  {

    return this.http.get<Personaje>(`${environment.baseUrlAPI}${id}`)

  }
  obtenerLocation(){

  }
}
