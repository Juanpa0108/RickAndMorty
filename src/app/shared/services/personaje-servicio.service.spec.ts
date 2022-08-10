import { TestBed } from '@angular/core/testing';

import { PersonajeServicioService } from './personaje-servicio.service';

describe('PersonajeServicioService', () => {
  let service: PersonajeServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajeServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
