import { Component, OnInit } from '@angular/core';
import { Notebook } from '../shared/notebook.model';
import { Store, select } from '@ngrx/store';
import * as fromNote from '../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss']
})
export class NotebooksComponent implements OnInit {

  notebookList$: Observable<Notebook[]>;

  constructor(private store: Store<fromNote.State>) { }

  ngOnInit() {
    this.notebookList$ = this.store.pipe(
      select(fromNote.getNotebookList)
    );
  }
}
