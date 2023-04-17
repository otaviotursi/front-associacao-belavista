import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarTipoStatusComponent } from './gerenciar-tipo-status/gerenciar-tipo-status.component';

const routes: Routes = [{ path: 'gerenciar-tipo-status', component: GerenciarTipoStatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoStatusRoutingModule { }
