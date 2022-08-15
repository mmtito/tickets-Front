import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Modulo } from './modulo';
import { ModuloService } from './modulo.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html'
})
export class ModuloComponent implements OnInit {

  constructor(
    private moduloService: ModuloService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Modulo =
  {
    id: 0,
    nombre: "",
    created: new Date(),
    updated: new Date(),
    enabled: true,
    archived: true,
    rolId: 0,
    motivos: []

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
    console.table(this.currentEntity);
    this.moduloService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          id: 0,
    nombre: "",
    created: new Date(),
    updated: new Date(),
    enabled: true,
    archived: true,
    rolId: 0,
    motivos: []

        };
      }
    )
  }

  findById(id: number):void {
    this.moduloService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.moduloService.deleteById(this.currentEntity.id).subscribe(
      () => {
        console.log("registro Borrado");
        //redireccionar ....
      }
    )
  }

  removeMotivo(id: number): void {
    this.currentEntity.motivos = this.currentEntity.motivos.filter(
      (item) => item.motivoId != id
    );
  }

}
