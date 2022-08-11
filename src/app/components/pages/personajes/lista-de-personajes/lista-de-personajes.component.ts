import { PersonajeServicioService } from './../../../../shared/services/personaje-servicio.service';
import { Personaje } from '@shared/interface/personaje.interface';
import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';

type RequestInfo={
  next:any;
};


@Component({
  selector: 'app-lista-de-personajes',
  templateUrl: './lista-de-personajes.component.html',
  styleUrls: ['./lista-de-personajes.component.css']
})
export class ListaDePersonajesComponent implements OnInit {
  personajes: Personaje[] = [];

  info:RequestInfo = {
    next : null,
  };

  private numeroPagina =1;

  private query!:string ;

  private esconderScroll=200;

  private mostrarScroll=500;


  constructor(private personajeServicio:PersonajeServicioService) { }

  ngOnInit(): void {
    this.obtenerInformacion();
  }

  private obtenerInformacion():void
  {
      this.personajeServicio.buscarPersonaje(this.query, this.numeroPagina)
      .pipe(
        take(1)
      ).subscribe((res:any)=>{
        console.log(res);
        const {info, results} =res;
        this.personajes = [...this.personajes, ...results];
        this.info=info;
      })
  }

}
