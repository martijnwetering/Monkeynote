import { Component, OnInit } from '@angular/core';
import * as noteActions from './state/note.actions';
import * as fromNotes from './state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-notes',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private store: Store<fromNotes.State>) { }

  ngOnInit() {
    this.store.dispatch(new noteActions.Load());
  }
}
