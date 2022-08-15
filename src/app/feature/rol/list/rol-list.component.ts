import { RolService } from './../rol.service';
import { Component, OnInit } from '@angular/core';
import { Rol } from '../rol';


@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.component.html',
})
export class RolListComponent implements OnInit {

  constructor(
    private rolService:RolService
  ) { }

  rolList: Rol[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void{
    this.rolService.findAll().subscribe(
      (response) => this.rolList=response
    )
  }

  public findByNombre(term: string):void{
    if(term.length>=1){
      this.rolService.findByNombre(term).subscribe(
        (response) => this.rolList=response
        )
    }
    if(term.length===0){
      this.findAll();
    }
  }

}
