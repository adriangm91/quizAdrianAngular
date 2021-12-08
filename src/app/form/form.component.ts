import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AutorNamespace } from '../autor.namespace';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
public autor : AutorNamespace.Autor = {

   name:  '',
   lastname: '',
   id: '',
   birthday: new Date(),
   selectedGenre: '',
   books:[],
   
   
}
public literaryGenre = ['Género épico', 'Género lírico', 'Género dramático', 'Género didáctico', 'Género novela', 'Género relato'];
public onSubmit(){

    this._autoresService.autores.push({...this.autor})
    alert('Autor creado exitosamente')
    
  }
  

   constructor(private _autoresService: AutoresService) { }

  ngOnInit(): void {
  }

}
