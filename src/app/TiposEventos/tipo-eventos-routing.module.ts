import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarTipoEventosComponent } from './gerenciar-tipo-eventos/gerenciar-tipo-eventos.component';

const routes: Routes = [{ path: 'gerenciar-tipo-eventos', component: GerenciarTipoEventosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoEventosRoutingModule { }
