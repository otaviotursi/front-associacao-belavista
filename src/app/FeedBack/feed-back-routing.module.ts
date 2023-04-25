import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { EscreverFeedbackComponent } from './escrever-feedback/escrever-feedback.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  { path: 'lista-feedback', component: FeedBackComponent, canActivate: [AuthGuardService] },
  { path: 'escrever-feedback', component: EscreverFeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedBackRoutingModule { }
