import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Modulo } from './modulo';
import { ModuloService } from './modulo.service';

@Component({
  selector: 'app-modulo-combobox',
  templateUrl: './modulo-combobox.component.html',

})
export class ModuloComboboxComponent implements OnInit {

  constructor(
    private moduloService: ModuloService
  ) { }

  modulos: Modulo[] = [];
   @Output() moduloIdEmmiter = new EventEmitter<number>();
   @Input() moduloId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll() :void{
    this.moduloService.findAll().subscribe(

      (respose) => this.modulos = respose
    )
  }

  public onSelect(id:string){
    this.moduloIdEmmiter.emit(parseInt(id));
  }



}
