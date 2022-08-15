import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sugerencia-toolbar',
  templateUrl: './sugerencia-toolbar.component.html',

})
export class SugerenciaToolbarComponent implements OnInit {

  @Input () entityName:string="";
  @Output() termEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  public onInput(term: string){
    this.termEmitter.emit(term)
  }

}
