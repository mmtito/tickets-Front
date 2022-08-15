import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rol } from '../rol';
import { RolService } from '../rol.service';


@Component({
  selector: 'app-rol-combobox',
  templateUrl: './rol-combobox.component.html',

})
export class RolComboboxComponent implements OnInit {

  constructor(
    private rolService: RolService
  ) { }

  roles: Rol[] = [];
  @Output() rolIdEmitter = new EventEmitter<number>();
  @Input() rolId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.rolService.findAll().subscribe(
      (respose) => this.roles = respose
    )
  }

  public onSelect(id:string){

    this.rolIdEmitter.emit(parseInt(id));
  }

}
