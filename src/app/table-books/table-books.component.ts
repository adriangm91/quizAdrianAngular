import { Component, OnInit } from '@angular/core';
import { AutorNamespace } from '../autor.namespace';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.css']
})
export class TableBooksComponent implements OnInit {
  public autores : Array<AutorNamespace.Autor> = [];


  constructor(private _autoresService: AutoresService) { 
    this.autores= this._autoresService.autores;
  }
  ngOnInit(): void {
  }

}
