import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './note.component';
import { RequireAuthenticatedUserRouteGuardService } from '../shared/require-authenticated-user-route-guard.service';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotebooksComponent } from './notebooks/notebooks.component';

const routes: Routes = [
  {
    path: '', component: NotesComponent,
    canActivate: [RequireAuthenticatedUserRouteGuardService],
    children: [
      { path: 'notes', component: NotesListComponent },
      { path: 'notebooks', component: NotebooksComponent }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
