import { Component, OnInit } from '@angular/core';
import { Notebook } from '../shared/notebook.model';
import { Store, select } from '@ngrx/store';
import * as fromNote from '../state';
import * as noteActions from '../state/note.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss']
})
export class NotebooksComponent implements OnInit {

  notebookList$: Observable<Notebook[]>;

  constructor(private store: Store<fromNote.State>, private router: Router) { }

  ngOnInit() {
    this.notebookList$ = this.store.pipe(
      select(fromNote.getNotebookList)
    );
  }

  selectNotebook(id: number) {
    this.store.dispatch(new noteActions.SelectNotebook(id));
    this.router.navigate(['notes']);
  }

  addNotebook() {
    const newNotebook: Notebook = { title: 'No Title', defaultNotebook: false };
    this.store.dispatch(new noteActions.AddNotebook(newNotebook));
  }
}
