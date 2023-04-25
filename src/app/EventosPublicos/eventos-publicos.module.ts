import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { EventosPublicosRoutingModule } from './eventos-publicos-routing.module';
import { EventosPublicosComponent } from './eventos-publicos/eventos-publicos.component';
import { AlterarEventosDialog, ExcluirEventosDialog, GerenciarEventoComponent, InserirEventosDialog } from './gerenciar-evento/gerenciar-evento.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InserirEventoComponent } from './gerenciar-evento/inserir-evento/inserir-evento.component';
import { ExcluirEventoComponent } from './gerenciar-evento/excluir-evento/excluir-evento.component';
import { AlterarEventoComponent } from './gerenciar-evento/alterar-evento/alterar-evento.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    EventosPublicosComponent,
    GerenciarEventoComponent,
    InserirEventoComponent,
    ExcluirEventoComponent,
    AlterarEventoComponent,
    InserirEventosDialog,
    ExcluirEventosDialog,
    AlterarEventosDialog,
  ],
  imports: [
    MatTableModule,
    CommonModule,
    EventosPublicosRoutingModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    EventosPublicosComponent
  ]
})
export class EventosPublicosModule { }
