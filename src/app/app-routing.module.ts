import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina',
    pathMatch: 'full'
  },
  { path: 'eventos-publicos', loadChildren: () => import('./EventosPublicos/eventos-publicos.module').then(m => m.EventosPublicosModule) },
  { path: 'banco-ideias', loadChildren: () => import('./banco-ideias/banco-ideias.module').then(m => m.BancoIdeiasModule) },
  { path: 'feed-back', loadChildren: () => import('./FeedBack/feed-back.module').then(m => m.FeedBackModule) },
  { path: 'tipo-eventos', loadChildren: () => import('./TiposEventos/tipo-eventos.module').then(m => m.TipoEventosModule) },
  { path: 'tipo-status', loadChildren: () => import('./TiposStatus/tipo-status.module').then(m => m.TipoStatusModule) },

];
const routesComponent: Routes = [{ path: 'pagina', component: PaginaInicialComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routesComponent)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
