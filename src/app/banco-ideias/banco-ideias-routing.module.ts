import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoIdeiasComponent } from './listar-ideias/banco-ideias.component';
import { GerenciarIdeiasComponent } from './gerenciar-ideias/gerenciar-ideias.component';
import { EscreverIdeiaComponent } from './escrever-ideia/escrever-ideia.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  { path: 'listar-ideias', component: BancoIdeiasComponent, canActivate: [AuthGuardService] },
  { path: 'escrever-ideias', component: EscreverIdeiaComponent },
  { path: 'gerenciar-ideias', component: GerenciarIdeiasComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancoIdeiasRoutingModule { }
