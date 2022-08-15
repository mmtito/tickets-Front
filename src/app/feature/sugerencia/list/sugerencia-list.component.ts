import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Sugerencia } from '../sugerencia';
import { SugerenciaService } from '../sugerencia.service';

@Component({
  selector: 'app-sugerencia-list',
  templateUrl: './sugerencia-list.component.html',

})
export class SugerenciaListComponent implements OnInit {

  constructor(
    private sugerenciaService:SugerenciaService
  ) { }


  sugerenciaList: Sugerencia[] = [];

  ngOnInit(): void {
    this.findAll();
  }
  public findAll():void{
    this.sugerenciaService.findAll().subscribe(
       (response) => this.sugerenciaList =  response
    )
  }

  public finBynombreSugerencia(term: string): void{
    if(term.length>=2){
      this.sugerenciaService.finBynombreSugerencia(term).subscribe(
        (response) => this.sugerenciaList = response
      )
    }
    if(term.length===0){
     this.findAll();
    }
  }

}
