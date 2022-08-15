import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Modulo } from '../modulo';
import { ModuloService } from '../modulo.service';

@Component({
  selector: 'app-modulo-search',
  templateUrl: './modulo-search.component.html',
})

export class ModuloSearchComponent implements OnInit {

  constructor(
    private moduloService: ModuloService
  ) { }

  modulos:Modulo[] = []

  @Output() moduloEmitter = new EventEmitter<Modulo>();

  ngOnInit(): void {
  }
  onInput(term: string):void {
    if(term.length>=2){
      this.moduloService.findByNombre(term).subscribe(
        (response) => this.modulos = response
      )
    }
    if(term.length===0){
      this.modulos = [];
    }
   }

   onSelect(modulo:Modulo): void {
    this.moduloEmitter.emit(modulo);
   }


}
