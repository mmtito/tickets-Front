import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Motivo } from '../motivo';
import { MotivoService } from '../motivo.service';

@Component({
  selector: 'app-motivo-search',
  templateUrl: './motivo-search.component.html'
})
export class MotivoSearchComponent implements OnInit {


  constructor(
    private motivoService: MotivoService
  ) { }

  motivos: Motivo[] = [];

  @Output() motivoEmitter = new EventEmitter<Motivo>();

  ngOnInit(): void {
  }

  onInput(term: string):void {
    if (term.length>=2){
      this.motivoService.findByDescripcion(term).subscribe(
        (response) => this.motivos = response
      )
    }
    if (term.length===0){
      this.motivos = [];
    }

  }

  onSelect(motivo: Motivo):void {
    this.motivoEmitter.emit(motivo);
  }
}
