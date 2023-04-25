import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciaLoginComponent } from './gerencia-login/gerencia-login.component';

const routes: Routes = [{ path: '', component: GerenciaLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciaLoginRoutingModule { }
