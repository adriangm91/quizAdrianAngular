import { Component, OnInit } from '@angular/core';
import { AutorNamespace } from '../autor.namespace';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-form-books',
  templateUrl: './form-books.component.html',
  styleUrls: ['./form-books.component.css']
})
export class FormBooksComponent implements OnInit {

  public libro : AutorNamespace.Book = {
    title: '',
    year: new Date,
    genre: '',
    autor: '',
    
  }
  public selectedAutor ='';
  public libroGuardado : Array<AutorNamespace.Book> = [];
  public autoresNombres: Array<AutorNamespace.Autor>= [];

  public onRegister(){
    
    
    for(let i=0; i < this.autoresNombres.length; i++){
      if(this.libro.autor ===this._autoresService.autores[i].name){ 
        console.log(this.libro.autor)
        this._autoresService.autores[i].books.push(this.libro);
      }else{
        console.log("no haga nada")
       

      }
      console.log(i,"veces que sale");
    }
    console.log(this.autoresNombres);
  }
  constructor(private _autoresService: AutoresService) {
    this.autoresNombres= this._autoresService.autores;
   }

  ngOnInit(): void {
  }

}
