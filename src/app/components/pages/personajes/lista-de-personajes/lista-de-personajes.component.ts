import { PersonajeServicioService } from './../../../../shared/services/personaje-servicio.service';
import { Personaje } from '@shared/interface/personaje.interface';
import { Component, OnInit } from '@angular/core';
import {filter, take} from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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



  constructor(private personajeServicio:PersonajeServicioService, private router:ActivatedRoute, private ruta:Router) {
    this.urlCambio();
   }

  ngOnInit(): void {
    this.buscarPersonaje();
  }




  public urlCambio(){

    this.ruta.events.pipe(
      filter((event)=>event instanceof NavigationEnd)).subscribe(()=>{
        this.personajes=[];
        this.numeroPagina=1;
        this.buscarPersonaje();
      })

  }

  public buscarPersonaje(){

    this.router.queryParams.pipe(take(1)).subscribe((params:any)=>{

      console.log(params);
      this.query = params['q'];
      this.obtenerInformacion();

    })



  }


  public obtenerInformacion()
  {
      this.personajeServicio.buscarPersonaje(this.query, this.numeroPagina)
      .pipe(
        take(1)
      ).subscribe((res:any)=>{
        if(res?.results?.length){
          const {info, results} =res;
        this.personajes = [...results];
        this.info=info;

        }else{

          this.personajes=[];
        }


      });
  }

}
