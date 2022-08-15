import { Component, OnInit } from '@angular/core';
import { Modulo } from '../modulo';
import { ModuloService } from '../modulo.service';

@Component({
  selector: 'app-modulo-list',
  templateUrl: './modulo-list.component.html'
  
})
export class ModuloListComponent implements OnInit {

  constructor(
    private moduloService: ModuloService
  ) { }

  moduloList: Modulo[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.moduloService.findAll().subscribe(
      (response) => this.moduloList = response
    )
  }

  public findByNombre(term: string): void{
    if (term.length>=2){
      this.moduloService.findByNombre(term).subscribe(
        (response) => this.moduloList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }

}
