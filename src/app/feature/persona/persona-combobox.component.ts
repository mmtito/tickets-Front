import { PersonaService } from './persona.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-persona-combobox',
  templateUrl: './persona-combobox.component.html',
})
export class PersonaComboboxComponent implements OnInit {

  constructor(
    private personaService: PersonaService
  ) { }

  personas: Persona[] = [];
  @Output() personaIdEmitter = new EventEmitter<number>();
  @Input() personaId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.personaService.findAll().subscribe(
      (respose) => this.personas = respose
      )
  }

  public onSelect(id:string){
    this.personaIdEmitter.emit(parseInt(id));
  }


}
