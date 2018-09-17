import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequireAuthenticatedUserRouteGuardService } from './shared/require-authenticated-user-route-guard.service';
import { NotesComponent } from './notes/notes.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'notes', pathMatch: 'full',
    canActivate: [RequireAuthenticatedUserRouteGuardService]
  },
  {
    path: 'notes', component: NotesComponent,
    canActivate: [RequireAuthenticatedUserRouteGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
