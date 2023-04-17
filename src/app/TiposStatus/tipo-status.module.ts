import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoStatusRoutingModule } from './tipo-status-routing.module';
import { ExcluirTiposStatusDialog, GerenciarTipoStatusComponent, InserirTiposStatusDialog } from './gerenciar-tipo-status/gerenciar-tipo-status.component';
import { InserirTipoStatusComponent } from './inserir-tipo-status/inserir-tipo-status.component';
import { ExcluirTipoStatusComponent } from './excluir-tipo-status/excluir-tipo-status.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    GerenciarTipoStatusComponent,
    InserirTipoStatusComponent,
    ExcluirTipoStatusComponent,
    InserirTiposStatusDialog,
    ExcluirTiposStatusDialog
  ],
  imports: [
    CommonModule,
    TipoStatusRoutingModule,
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
    MatDialogModule,
    MatButtonModule
  ]
})
export class TipoStatusModule { }
