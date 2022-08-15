import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Rol } from '../../rol/rol';
import { RolService } from '../../rol/rol.service';

import { Sugerencia } from '../sugerencia';
import { SugerenciaService } from '../sugerencia.service';

@Component({
  selector: 'app-sugerencia-form',
  templateUrl: './sugerencia.form.component.html'
})
export class SugerenciaFormComponent implements OnInit {

  constructor(
    private sugerenciaService: SugerenciaService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private rolService:RolService
  ) { }

  currentEntity: Sugerencia =
  {
    id: 0,
nombreSugerencia:"",
idMotivo:0,
    updated: new Date(),
    created: new Date(),
    enabled: true,
    archived: true,
    motivoId:0,
    rolies: []
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {

    this.sugerenciaService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          id: 0,
          nombreSugerencia:"",
          idMotivo:0,
              updated: new Date(),
              created: new Date(),
              enabled: true,
              archived: true,
              motivoId:0,
              rolies: []
        };
        this.router.navigate(['/layout/sugerencia-list']);
      }
    )
  }

  findById(id: number):void {
    this.sugerenciaService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.rolies.forEach(
          (auth) => {
            this.rolService.findById(auth.rolId).subscribe(
              (item) => auth.nombre = item.nombre
            )
          }
        )
      }
    )
  }

  deleteById():void{
    this.sugerenciaService.deleteById(this.currentEntity.id).subscribe(
      () => {
        console.log("Borrado");
        this.currentEntity =
        {
          id: 0,
nombreSugerencia:"",
idMotivo:0,
    updated: new Date(),
    created: new Date(),
    enabled: true,
    archived: true,
    motivoId:0,
    rolies: []
        };
        //redireccionar ....
      }
    )
  }

  removeRol(id:number):void{
    this.currentEntity.rolies=
    this.currentEntity.rolies.filter(
      (item) =>{item.rolId != id}
    )
  }

}
