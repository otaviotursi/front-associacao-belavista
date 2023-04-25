import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarTipoEventosComponent } from './gerenciar-tipo-eventos/gerenciar-tipo-eventos.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  { path: 'gerenciar-tipo-eventos', component: GerenciarTipoEventosComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoEventosRoutingModule { }
