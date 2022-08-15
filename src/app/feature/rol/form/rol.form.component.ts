
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from '../rol';
import { RolService } from '../rol.service';
import { ModuloService } from '../../modulo/modulo.service';

@Component({
  selector: 'app-rol-form',
  templateUrl: './rol.form.component.html',
})
export class RolFormComponent implements OnInit {

  constructor(
    private moduloService: ModuloService,
    private rolService:RolService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  currentEntity:Rol =
  {
    rolId:0,
    nombre:"",
    admin:true,
    created: new Date(),
    updated: new Date(),
    enabled: true,
    personaId:0,
    modulos: [],
  };


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      });
  }

  save():void {
    console.table(this.currentEntity);
    this.rolService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
            rolId:0,
            nombre:"",
            admin:true,
            created: new Date(),
            updated: new Date(),
            enabled: true,
            personaId:0,
            modulos: [],
        };
        this.router.navigate(['/layout/rol-list']);
      });
  }

  findById(id: number):void {
    this.rolService.findById(id).subscribe((response) => {
        this.currentEntity = response;
        this.currentEntity.modulos.forEach((modulo) => {
          this.moduloService
          .findById(modulo.id)
          .subscribe((item) => (modulo.nombre = item.nombre));
      });
    });
  }

  deleteById(): void{
    this.rolService.deleteById(this.currentEntity.rolId).subscribe(
      () => {
        console.log("borrando");
      }
    )};

removeModulo(id: number): void {
    this.currentEntity.modulos =
    this.currentEntity.modulos.filter(
      (item) => item.id != id
    );
  }
}
