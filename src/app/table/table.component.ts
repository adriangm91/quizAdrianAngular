import { Component, OnInit } from '@angular/core';
import { AutorNamespace } from '../autor.namespace';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public autores : Array<AutorNamespace.Autor> = [];
  public librosAutor: Array<AutorNamespace.Book>=[];

  public verLibros(){
    console.log(this.librosAutor);
  }
  constructor(private _autoresService: AutoresService) { 
    this.autores= this._autoresService.autores;
  }

  ngOnInit(): void {
  }

}
