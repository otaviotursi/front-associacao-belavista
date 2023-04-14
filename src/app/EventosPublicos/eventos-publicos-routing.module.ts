import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosPublicosComponent } from './eventos-publicos/eventos-publicos.component';
import { GerenciarEventoComponent } from './gerenciar-evento/gerenciar-evento.component';

const routes: Routes = [
  { path: 'lista-evento', component: EventosPublicosComponent },
  { path: 'gerenciar-evento', component: GerenciarEventoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosPublicosRoutingModule {}
