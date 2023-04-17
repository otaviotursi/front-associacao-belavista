import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedBackRoutingModule } from './feed-back-routing.module';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { EscreverFeedbackComponent } from './escrever-feedback/escrever-feedback.component';
import { NotaAssociacaoComponent } from './nota-associacao/nota-associacao.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    FeedBackComponent,
    EscreverFeedbackComponent,
    NotaAssociacaoComponent
  ],
  imports: [
    CommonModule,
    FeedBackRoutingModule,
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
  ],
  exports: [
    NotaAssociacaoComponent
  ]
})
export class FeedBackModule { }
