import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoIdeiasComponent } from './listar-ideias/banco-ideias.component';
import { GerenciarIdeiasComponent } from './gerenciar-ideias/gerenciar-ideias.component';
import { EscreverIdeiaComponent } from './escrever-ideia/escrever-ideia.component';

const routes: Routes = [
  { path: 'listar-ideias', component: BancoIdeiasComponent },
  { path: 'escrever-ideias', component: EscreverIdeiaComponent },
  { path: 'gerenciar-ideias', component: GerenciarIdeiasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancoIdeiasRoutingModule { }
