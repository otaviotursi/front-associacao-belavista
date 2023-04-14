import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'eventos-publicos', loadChildren: () => import('./EventosPublicos/eventos-publicos.module').then(m => m.EventosPublicosModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'banco-ideias', loadChildren: () => import('./banco-ideias/banco-ideias.module').then(m => m.BancoIdeiasModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
