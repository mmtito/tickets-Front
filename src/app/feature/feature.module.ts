import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TkrespuestaFormComponent } from './tkrespuesta/form/tkrespuesta.form.component';

import { NeedComboboxComponent } from './need/need-combobox.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './ts-usuario/form/user.form.component';
import { TsCarreraFormComponent } from './ts-carrera/form/ts-carrera.form.component';
import { TsCarreraListComponent } from './ts-carrera/list/ts-carrera-list.component';
import { CarreraToolbarComponent } from './ts-carrera/toolbar/carrera-toolbar.component';
import { UserListComponent } from './ts-usuario/list/user-list.component';
import { UserToolbarComponent } from './ts-usuario/toolbar/user-toolbar.component';
import { CarrerComboboxComponent } from './carrer/carrer-combobox.component';
import { TsUsuarioComboboxComponent } from './ts-usuario-combobox/ts-usuario-combobox.component';
import { TkrespuestaListComponent } from './tkrespuesta/list/tkrespuesta-list.component';
import { TkrespuestaToolbarComponent } from './tkrespuesta/toolbar/tkrespuesta-toolbar.component';
import { TicketFormComponent } from './ticket/form/ticket.form.component';
import { TicketListComponent } from './ticket/list/ticket.list.component';
import { TicketToolbarComponent } from './ticket/toolbar/ticket.toolbar.component';
import { TipSearchComponent } from './tip/tip-search/tip-search.component';
import { AuthorizeSearchComponent } from './authorize/authorize-search/authorize-search.component';
import { EstudianteSearchComponent } from './authority/estudiante-search/estudiante-search.component';
import { AuthoritySearchComponent } from './authority/authority-search/authority-search.component';
import { ModuloComponent } from './modulo/modulo.component';
import { ModuloFormComponent } from './modulo/form/modulo.form.component';
import { ModuloListComponent } from './modulo/list/modulo-list.component';
import { ModuloComboboxComponent } from './modulo/modulo-combobox.component';
import { ModuloSearchComponent } from './modulo/modulo-search/modulo-search.component';
import { ModuloToolbarComponent } from './modulo/toolbar/modulo-toolbar.component';
import { MotivoFormComponent } from './motivo/form/motivo.form.component';
import { MotivoListComponent } from './motivo/list/motivo-list.component';
import { MotivoComboboxComponent } from './motivo/motivo-combobox.component';
import { MotivoSearchComponent } from './motivo/motivo-search/motivo-search.component';
import { MotivoComponent } from './motivo/motivo.component';
import { MotivoToolbarComponent } from './motivo/toolbar/motivo-toolbar.component';
import { PersonaComboboxComponent } from './persona/persona-combobox.component';
import { RolFormComponent } from './rol/form/rol.form.component';
import { RolListComponent } from './rol/list/rol-list.component';
import { RolComboboxComponent } from './rol/rol-combobox/rol-combobox.component';
import { RolSearchComponent } from './rol/rol-search/rol-search.component';
import { RolToolbarComponent } from './rol/toolbar/rol-toolbar.component';
import { SugerenciaFormComponent } from './sugerencia/form/sugerencia.form.component';
import { SugerenciaListComponent } from './sugerencia/list/sugerencia-list.component';
import { SugerenciaSearchComponent } from './sugerencia/sugerencia-search/sugerencia-search.component';
import { SugerenciaToolbarComponent } from './sugerencia/toolbar/sugerencia-toolbar.component';

@NgModule({
  declarations: [
    TsCarreraFormComponent ,
    UserFormComponent,
    TsCarreraListComponent,
    CarreraToolbarComponent,
    UserListComponent,
    UserToolbarComponent,
    CarrerComboboxComponent,
    TsUsuarioComboboxComponent,
    TicketFormComponent,
    TicketListComponent,
    TicketToolbarComponent,
    TipSearchComponent,
    AuthorizeSearchComponent,
    EstudianteSearchComponent,
    TkrespuestaFormComponent,
    TkrespuestaListComponent,
    TkrespuestaToolbarComponent,
    NeedComboboxComponent,
    AuthoritySearchComponent,
    ModuloComponent,
    ModuloFormComponent,
    ModuloComboboxComponent,
    ModuloListComponent,
    ModuloToolbarComponent,
    MotivoComboboxComponent,
    MotivoFormComponent,
    MotivoListComponent,
    MotivoSearchComponent,
    MotivoComponent,
    MotivoToolbarComponent,
    SugerenciaFormComponent,
    SugerenciaListComponent,
    SugerenciaSearchComponent,
    SugerenciaToolbarComponent,
    RolComboboxComponent,
    RolFormComponent,
    RolListComponent,
    RolToolbarComponent,
    RolSearchComponent,
    PersonaComboboxComponent,
    ModuloSearchComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }


   

