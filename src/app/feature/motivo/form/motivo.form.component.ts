import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authority } from '../../authority/authority';
import { AuthorityService } from '../../authority/authority.service';
import { SugerenciaService } from '../../sugerencia/sugerencia.service';


import { Motivo } from '../motivo';
import { MotivoService } from '../motivo.service';

@Component({
  selector: 'app-motivo-form',
  templateUrl: './motivo.form.component.html',

})
export class MotivoFormComponent implements OnInit {
  constructor(
    private motivoService: MotivoService,
    private activateRoute: ActivatedRoute,
    private authorityService: AuthorityService,
    private sugerenciaService: SugerenciaService,
    private  router: Router,

  ) {}

  currentEntity: Motivo = {
    motivoId:0,

    descripcion:"",
    created: new Date(),
    update: new Date(),
    enabled: true,
    archivaded: true,
    moduloId:0,
    //authorities: [],
    sugerencias: [],
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

        descripcion: "",
        created: new Date(),
        update: new Date(),
        enabled: true,
        archivaded: true,
        moduloId:0,
       // authorities: [],
        sugerencias: [],
        moduloNombre:""
      };
      this.router.navigate(['/layout/list']);
    });
  }

  findById(id: number):void{
    this.motivoService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.sugerencias.forEach(
          (suge) => {
            this.sugerenciaService.findById(suge.id).subscribe(
              (item) => suge.nombreSugerencia = item.nombreSugerencia
            )
          }
        )
      }
    )
  }

  deleteById():void{
   this.motivoService.deleteById(this.currentEntity.motivoId).subscribe(
    () => {
      this.currentEntity = {
        motivoId:0,

        descripcion: "",
        created: new Date(),
        update: new Date(),
        enabled: true,
        archivaded: true,
        moduloId:0,
        //authorities: [],
        sugerencias: [],
        moduloNombre:""
      };

    }
   )
  }




  removeSugerencia(id: number){
    this.currentEntity.sugerencias =
    this.currentEntity.sugerencias.filter(
    (item) => item.id !== id
    );
  }

}
