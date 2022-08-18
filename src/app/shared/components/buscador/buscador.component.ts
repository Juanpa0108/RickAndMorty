import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-buscador',
  template: `
      <input
    #buscar
    autofocus
    type="text"
    class="buscador"
    placeholder="Personaje"
    />
    <button (click)="aBuscar(buscar.value)">Buscar</button>
  `,
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  aBuscar(value:string)
  {
          this.router.navigate(['/listaDePersonajes'], {
            queryParams:{q:value}
          })
  }
}
