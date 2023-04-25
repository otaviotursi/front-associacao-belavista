import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { FeedBackModule } from './FeedBack/feed-back.module';
import { InformacoesGeraisModule } from './informacoes-gerais/informacoes-gerais.module';
import { EventosPublicosModule } from './EventosPublicos/eventos-publicos.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    FeedBackModule,
    InformacoesGeraisModule,
    EventosPublicosModule
  ],
  providers: [
    MatNativeDateModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
