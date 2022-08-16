/**
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Personaje } from "@app/shared/interface/personaje.interface";

@Component({
  selector: 'app-persos',
  template:`
   <div class="card" [routerLink]="['/detallesPersonaje', personaje.id ]">
    <div class="image">
      <a><img [src]="personaje.image" [alt]="personaje.name" class="card-img-top"/></a>
    </div>
    <div class="card-inner">
      <div class="header">
        <a>
          <h3>{{personaje.name | slice: 0:15}}</h3>
        </a>
          <h5>{{personaje.gender}}</h5>
          <h6 *ngIf="personaje.status=='Alive'" [ngStyle]="{color: '#8DD330'}">{{personaje.status}}</h6>
          <h6 *ngIf="personaje.status=='Dead'" [ngStyle]="{color: 'red'}">{{personaje.status}}</h6>
          <h6 *ngIf="personaje.status!='Alive'&& personaje.status!='Dead'" [ngStyle]="{color: 'grey'}">{{personaje.status}}</h6>
          <h6 style="margin-bottom: 25px;">{{personaje.species}}</h6>
          <small>{{personaje.location.name}}</small>

      </div>


    </div>
    </div>`,
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class personajeComponent{
  @Input()personaje!:Personaje;
}
 */
