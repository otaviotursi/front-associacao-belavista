import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosPublicosComponent } from './eventos-publicos/eventos-publicos.component';
import { GerenciarEventoComponent } from './gerenciar-evento/gerenciar-evento.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { ExcluirEventoComponent } from './gerenciar-evento/excluir-evento/excluir-evento.component';
import { AlterarEventoComponent } from './gerenciar-evento/alterar-evento/alterar-evento.component';

const routes: Routes = [
  { path: 'lista-evento', component: EventosPublicosComponent },
  { path: 'gerenciar-evento', component: GerenciarEventoComponent, canActivate: [AuthGuardService] },
  { path: 'gerenciar-evento/inserir-evento', component: ExcluirEventoComponent, canActivate: [AuthGuardService] },
  { path: 'gerenciar-evento/excluir-evento', component: ExcluirEventoComponent, canActivate: [AuthGuardService] },
  { path: 'gerenciar-evento/alterar-evento', component: AlterarEventoComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosPublicosRoutingModule {}
