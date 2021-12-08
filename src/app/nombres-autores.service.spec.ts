import { TestBed } from '@angular/core/testing';

import { NombresAutoresService } from './nombres-autores.service';

describe('NombresAutoresService', () => {
  let service: NombresAutoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombresAutoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
