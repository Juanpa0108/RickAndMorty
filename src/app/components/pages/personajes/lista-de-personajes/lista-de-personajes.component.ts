import { PersonajeServicioService } from './../../../../shared/services/personaje-servicio.service';
import { Personaje } from '@shared/interface/personaje.interface';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {filter, take} from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {DOCUMENT} from '@angular/common'
type RequestInfo={
  next: any;
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

  showGoUpButton = false;

  private numeroPagina =1;

  private query!:string ;

  private esconderScroll=200;

  private mostrarScroll=500;



  constructor(
    @Inject(DOCUMENT) private document:Document,
    private personajeServicio:PersonajeServicioService,
    private router:ActivatedRoute,
    private ruta:Router) {
    this.urlCambio();
   }

  ngOnInit(): void {
    this.buscarPersonaje();
  }


  @HostListener('window:scroll', [])
  onWindowScroll(){
    const yOffSet = window.pageYOffset;
    if((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.mostrarScroll){
      this.showGoUpButton = true;
    }else if(this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.esconderScroll){
      this.showGoUpButton = false;
    }
  }

  onScrollDown(){
    if(this.info.next){
      this.numeroPagina++;
      this.obtenerInformacion();
    }
  }

  onScrollUp(){
    this.document.body.scrollTop=0;
    this.document.documentElement.scrollTop=0;

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
        this.personajes = [...this.personajes, ...results];
        this.info=info;

        }else{

          this.personajes=[];
        }


      });
  }

}
