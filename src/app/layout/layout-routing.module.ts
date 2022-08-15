import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserFormComponent } from '../feature/ts-usuario/form/user.form.component';
import { TsCarreraFormComponent } from '../feature/ts-carrera/form/ts-carrera.form.component';
import { TsCarreraListComponent } from '../feature/ts-carrera/list/ts-carrera-list.component'
import { UserListComponent } from '../feature/ts-usuario/list/user-list.component';

import { TicketFormComponent } from '../feature/ticket/form/ticket.form.component';
import { TicketListComponent } from '../feature/ticket/list/ticket.list.component';
import { TkrespuestaFormComponent } from '../feature/tkrespuesta/form/tkrespuesta.form.component';
import { TkrespuestaListComponent } from '../feature/tkrespuesta/list/tkrespuesta-list.component';
import { ModuloFormComponent } from '../feature/modulo/form/modulo.form.component';
import { ModuloListComponent } from '../feature/modulo/list/modulo-list.component';
import { ModuloComponent } from '../feature/modulo/modulo.component';
import { MotivoFormComponent } from '../feature/motivo/form/motivo.form.component';
import { MotivoListComponent } from '../feature/motivo/list/motivo-list.component';
import { RolFormComponent } from '../feature/rol/form/rol.form.component';
import { RolListComponent } from '../feature/rol/list/rol-list.component';
import { SugerenciaFormComponent } from '../feature/sugerencia/form/sugerencia.form.component';
import { SugerenciaListComponent } from '../feature/sugerencia/list/sugerencia-list.component';



const routes: Routes = [
  {path: '', component:MainComponent,
  children:[
    {path: '', component: DashboardComponent},
    {path: 'dashborad', component: DashboardComponent},
    {path: 'usuario-form', component: UserFormComponent },
    {path: 'usuario-form/:id', component: UserFormComponent },
    {path: 'usuario-list', component: UserListComponent },
    {path: 'carrera/:id', component: TsCarreraFormComponent },
    {path: 'carrera', component: TsCarreraFormComponent},
    {path: 'carrera-list', component: TsCarreraListComponent},
    {path: '', component:DashboardComponent},
    {path: 'tkrespuesta-form', component: TkrespuestaFormComponent},
    {path: 'tkrespuesta-form/:id', component: TkrespuestaFormComponent},
    {path: 'tkrespuesta-list', component: TkrespuestaListComponent}, 
    {path: 'ticket-form', component:TicketFormComponent},
    {path: 'ticket-form/:id', component:TicketFormComponent},
    {path: 'ticket-list', component:TicketListComponent},
    {path: 'dashboard', component:DashboardComponent},
    { path: 'modulo-form', component: ModuloFormComponent },
    { path: 'modulo-form/:id', component: ModuloFormComponent },
    { path: 'modulo-list', component: ModuloListComponent },
    { path: 'modulo', component: ModuloComponent },
    { path: 'sugerencia-form', component: SugerenciaFormComponent },
    { path: 'sugerencia-form/:id', component: SugerenciaFormComponent },
    { path: 'sugerencia-list', component: SugerenciaListComponent },
    { path: 'sugerencia', component: SugerenciaFormComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'motivo', component: MotivoFormComponent },
    { path: 'motivo-form/:id', component: MotivoFormComponent },
    { path: 'motivo/:id', component: MotivoFormComponent },
    { path: '', component: DashboardComponent },
    { path: 'list', component: MotivoListComponent },
    {path:'rol-form', component:RolFormComponent},
    {path:'rol-form/:id', component:RolFormComponent},
    {path:'rol-list', component:RolListComponent},
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }