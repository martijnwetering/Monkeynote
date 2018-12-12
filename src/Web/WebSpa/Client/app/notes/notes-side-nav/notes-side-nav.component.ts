import { Component, OnInit } from '@angular/core';
import { NoteState } from '../state/note.reducer';
import { Store, select } from '@ngrx/store';
import { NewNote } from '../state/note.actions';
import * as fromNotes from '../state';
import { default as Delta } from 'quill-delta';

@Component({
  selector: 'app-notes-side-nav',
  templateUrl: './notes-side-nav.component.html',
  styleUrls: ['./notes-side-nav.component.scss']
})
export class NotesSideNavComponent implements OnInit {
  currentNotebookId = 0;

  constructor(private store: Store<NoteState>) {}

  ngOnInit() {
    this.store
      .pipe(select(fromNotes.getCurrentNotebookId))
      .subscribe(id => (this.currentNotebookId = id));
  }

  newNote() {
    const newNote = { id: 0, title: 'No Title', text: new Delta(), created: new Date(), tags: [] };
    this.store.dispatch(new NewNote({ note: newNote, notebookId: this.currentNotebookId }));
  }
}
