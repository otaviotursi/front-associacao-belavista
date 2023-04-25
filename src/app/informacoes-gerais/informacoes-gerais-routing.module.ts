import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacoesGeraisComponent } from './informacoes-gerais.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContateNosComponent } from './contate-nos/contate-nos.component';

const routes: Routes = [
  { path: '', component: InformacoesGeraisComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'contate-nos', component: ContateNosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacoesGeraisRoutingModule { }
