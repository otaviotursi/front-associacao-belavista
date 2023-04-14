import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { EventosPublicosRoutingModule } from './eventos-publicos-routing.module';
import { EventosPublicosComponent } from './eventos-publicos/eventos-publicos.component';
import { GerenciarEventoComponent } from './gerenciar-evento/gerenciar-evento.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    EventosPublicosComponent,
    GerenciarEventoComponent
  ],
  imports: [
    MatTableModule,
    CommonModule,
    EventosPublicosRoutingModule,
    MatPaginatorModule
  ]
})
export class EventosPublicosModule { }
