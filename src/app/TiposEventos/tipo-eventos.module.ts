import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcluirTiposEventosDialog, GerenciarTipoEventosComponent, InserirTiposEventosDialog } from './gerenciar-tipo-eventos/gerenciar-tipo-eventos.component';
import { TipoEventosRoutingModule } from './tipo-eventos-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { InserirTipoEventosComponent } from './gerenciar-tipo-eventos/inserir-tipo-eventos/inserir-tipo-eventos.component';
import { ExcluirTipoEventoComponent } from './gerenciar-tipo-eventos/excluir-tipo-evento/excluir-tipo-evento.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    GerenciarTipoEventosComponent,
    InserirTipoEventosComponent,
    ExcluirTipoEventoComponent,
    InserirTiposEventosDialog,
    ExcluirTiposEventosDialog
  ],
  imports: [
    CommonModule,
    TipoEventosRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class TipoEventosModule { }
