import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sugerencia } from '../sugerencia';
import { SugerenciaService } from '../sugerencia.service';

@Component({
  selector: 'app-sugerencia-search',
  templateUrl: './sugerencia-search.component.html',

})
export class SugerenciaSearchComponent implements OnInit {

  constructor(
    private sugerenciaService: SugerenciaService
  ) { }

  sugerencias: Sugerencia[] = [];

  @Output() sugerenciaEmitter = new EventEmitter<Sugerencia>();

  ngOnInit(): void {
  }

  onInput(term: string): void{
    if(term.length>=2){
    this.sugerenciaService.findByNombreSugerencia(term).subscribe(
      (response) => this.sugerencias = response
    )
    }
    if(term.length===0){
      this.sugerencias = [];
    }
  }

  onSelect(sugerencia: Sugerencia): void{
    this.sugerenciaEmitter.emit(sugerencia);
  }
}
