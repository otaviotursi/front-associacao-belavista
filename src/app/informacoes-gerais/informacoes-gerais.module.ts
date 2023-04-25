import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesGeraisRoutingModule } from './informacoes-gerais-routing.module';
import { InformacoesGeraisComponent } from './informacoes-gerais.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContateNosComponent } from './contate-nos/contate-nos.component';


@NgModule({
  declarations: [
    InformacoesGeraisComponent,
    SobreNosComponent,
    ContateNosComponent
  ],
  imports: [
    CommonModule,
    InformacoesGeraisRoutingModule
  ],
  exports: [
    InformacoesGeraisComponent
  ]
})
export class InformacoesGeraisModule { }
