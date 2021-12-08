import { Injectable } from '@angular/core';
import { AutorNamespace } from './autor.namespace';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  
  public autores: Array<AutorNamespace.Autor> = [];

  constructor() { }
}
