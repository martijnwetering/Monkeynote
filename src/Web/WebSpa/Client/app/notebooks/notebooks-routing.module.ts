import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotebooksComponent } from './notebooks.component';
import { RequireAuthenticatedUserRouteGuardService } from '../shared/require-authenticated-user-route-guard.service';
import { NotebooksResolverService } from './notebooks-resolver.service';

const routes: Routes = [
  {
    path: 'notes', component: NotebooksComponent,
    resolve: { notebooks: NotebooksResolverService },
    canActivate: [RequireAuthenticatedUserRouteGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotebooksRoutingModule { }
