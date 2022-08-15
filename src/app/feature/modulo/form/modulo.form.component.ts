import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MotivoService } from '../../motivo/motivo.service';
import { Modulo } from '../modulo';
import { ModuloService } from '../modulo.service';

@Component({
  selector: 'app-modulo-form',
  templateUrl: './modulo.form.component.html',
})
export class ModuloFormComponent implements OnInit {
  constructor(
    private motivoService: MotivoService,
    private moduloService: ModuloService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  currentEntity: Modulo = {
    id: 0,
    nombre: '',
    created: new Date(),
    updated: new Date(),
    enabled: true,
    archived: true,
    rolId: 0,
    motivos: [],
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  save(): void {
    console.table(this.currentEntity);
    this.moduloService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        id: 0,
        nombre: '',
        created: new Date(),
        updated: new Date(),
        enabled: true,
        archived: true,
        rolId: 0,
        motivos: [],
      };
      this.router.navigate(['/layout/modulo-list']);
    });
  }

  findById(id: number): void {
    this.moduloService.findById(id).subscribe((response) => {
      this.currentEntity = response;
      this.currentEntity.motivos.forEach((motivo) => {
        this.motivoService
          .findById(motivo.motivoId)
          .subscribe((item) => (motivo.descripcion = item.descripcion));
      });
    });
  }
  deleteById(): void {
    this.moduloService.deleteById(this.currentEntity.id).subscribe(() => {
      console.log('registro Borrado');
      //redireccionar ....
    });
  }

  removeMotivo(id: number): void {
    this.currentEntity.motivos = this.currentEntity.motivos.filter(
      (item) => item.motivoId != id
    );
  }
}
