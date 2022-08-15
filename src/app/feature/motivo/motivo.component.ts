import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Motivo } from './motivo';
import { MotivoService } from './motivo.service';

@Component({
  selector: 'app-motivo',
  templateUrl: './motivo.component.html',

})
export class MotivoComponent implements OnInit {
  constructor(
    private motivoService: MotivoService,
    private activateRoute: ActivatedRoute
  ) {}


  currentEntity: Motivo = {
    motivoId:0,

    descripcion: '',
    created: new Date(),
    update: new Date(),
    enabled: true,
    archivaded: true,
    moduloId:  0,
    //authorities: [],
    sugerencias:  [],
    moduloNombre:""

  };

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      if (parametros.get('id')) {
        this.findById(parseInt(parametros.get('id')!));
      }
    });
  }

  save(): void {
    this.motivoService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        motivoId:0,
        descripcion:'',
        created: new Date(),
        update: new Date(),
        enabled: true,
        archivaded: true,
        moduloId:0,
        //authorities: [],
        sugerencias:  [],
        moduloNombre:""
      };
    });
  }

  findById(id: number):void{
    this.motivoService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
   this.motivoService.deleteById(this.currentEntity.motivoId).subscribe(
    () =>{
      this.currentEntity = {
        motivoId:0,
        descripcion: '',
        created: new Date(),
        update: new Date(),
        enabled: true,
        archivaded: true,
        moduloId:0,
        //authorities: [],
        sugerencias:  [],
        moduloNombre:""
      };

    }
   )
  }
}
