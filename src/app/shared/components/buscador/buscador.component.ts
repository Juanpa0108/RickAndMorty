import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  template: `
      <input
    #buscar
    autofocus
    type="text"
    class="form-control-lg"
    placeholder="Buscar"
    (keyup)="aBuscar(buscar.value)"
    />
  `,
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  aBuscar(value:string)
  {
    console.log(value)
      if(value && value.length > 3)
      {
          this.router.navigate(['/listaDePersonajes'], {
            queryParams:{q:value}
          })
      }

  }

}
