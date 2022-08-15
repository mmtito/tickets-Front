import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-motivo-toolbar',
  templateUrl: './motivo-toolbar.component.html',

})
export class MotivoToolbarComponent implements OnInit {

  @Input() entityName: string = "" ;
  @Output() termEmiter = new EventEmitter<string>();


  constructor() { }


  ngOnInit(): void {
  }

  public onInput(term: string){
    this.termEmiter.emit(term);
  }

}
