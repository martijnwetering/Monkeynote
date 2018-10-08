import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes.component';
import { RequireAuthenticatedUserRouteGuardService } from '../shared/require-authenticated-user-route-guard.service';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { NotebooksResolverService } from './notebooks/notebooks-resolver.service';
import { NotebookResolverService } from './notes-list/notebook-resolver.service';
import { DefaultNotebookResolverService } from './default-notebook-resolver.service';

const routes: Routes = [
  {
    path: 'notes', component: NotesComponent,
    canActivate: [RequireAuthenticatedUserRouteGuardService],
    resolve: { defaultNotebook: DefaultNotebookResolverService },
    children: [
      { path: 'list/:notebookId', component: NotesListComponent, resolve: { defaultNotebook: NotebookResolverService } },
      { path: 'notebooks', component: NotebooksComponent, resolve: { notebooks: NotebooksResolverService } }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
