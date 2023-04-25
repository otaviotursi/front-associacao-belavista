import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarTipoStatusComponent } from './gerenciar-tipo-status/gerenciar-tipo-status.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  { path: 'gerenciar-tipo-status', component: GerenciarTipoStatusComponent, canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoStatusRoutingModule { }
