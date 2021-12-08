import { Injectable } from '@angular/core';
import { AutorNamespace } from './autor.namespace';

@Injectable({
  providedIn: 'root'
})
export class NombresAutoresService {

  public nombresAutores: Array<AutorNamespace.Autor> = [];

  constructor() { }
}
