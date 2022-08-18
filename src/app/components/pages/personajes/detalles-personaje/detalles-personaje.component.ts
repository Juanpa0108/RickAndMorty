import { take } from 'rxjs/operators';
import { PersonajeServicioService } from './../../../../shared/services/personaje-servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '@app/shared/interface/personaje.interface';

@Component({
  selector: 'app-detalles-personaje',
  templateUrl: './detalles-personaje.component.html',
  styleUrls: ['./detalles-personaje.component.css']
})
export class DetallesPersonajeComponent implements OnInit {
  personaje$!:Observable<Personaje>;

  constructor(private route:ActivatedRoute, private Pservicio:PersonajeServicioService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id = params['id'];
      this.personaje$ = this.Pservicio.darDetalles(id);
      console.log(this.personaje$);
    });
  }

}
