import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Motivo } from './motivo';
import { MotivoService } from './motivo.service';

@Component({
  selector: 'app-motivo-combobox',
  templateUrl: './motivo-combobox.component.html',
})
export class MotivoComboboxComponent implements OnInit {

  constructor(
    private motivoService: MotivoService
  ) { }

  motivies: Motivo[] = [];
  @Output() motivoIdEmitter = new EventEmitter<number>();
  @Input() motivoId:number =0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void{
   this.motivoService.findAll().subscribe(
    (respose) => this.motivies = respose
   )
  }

  public onSelect(id:string){
    this.motivoIdEmitter.emit(parseInt(id));
  }



}
