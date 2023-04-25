import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciaLoginRoutingModule } from './gerencia-login-routing.module';
import { GerenciaLoginComponent } from './gerencia-login/gerencia-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    GerenciaLoginComponent
  ],
  imports: [
    CommonModule,
    GerenciaLoginRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class GerenciaLoginModule { }
