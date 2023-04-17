import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancoIdeiasRoutingModule } from './banco-ideias-routing.module';
import { BancoIdeiasComponent } from './listar-ideias/banco-ideias.component';
import { GerenciarIdeiasComponent } from './gerenciar-ideias/gerenciar-ideias.component';
import { EscreverIdeiaComponent } from './escrever-ideia/escrever-ideia.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    BancoIdeiasComponent,
    GerenciarIdeiasComponent,
    EscreverIdeiaComponent
  ],
  imports: [
    CommonModule,
    BancoIdeiasRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule
  ],
  exports: [
  ]
})
export class BancoIdeiasModule { }
