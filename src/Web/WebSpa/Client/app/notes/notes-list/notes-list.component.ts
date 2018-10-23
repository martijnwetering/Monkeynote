import { Component, OnInit } from '@angular/core';
import { Notebook } from '../shared/notebook.model';
import { Note } from '../shared/note.model';
import * as fromNotes from '../state';
import * as fromQuill from 'quill';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
const Quill: any = fromQuill;

// override p with div tag
const Parchment = Quill.import('parchment');
const Block = Parchment.query('block');

Block.tagName = 'DIV';
// or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
Quill.register(Block /* or NewBlock */, true);

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notebooks$: Observable<Notebook[]>;
  selectedNotebook$: Observable<Notebook>;
  selectedNote$: Observable<Note>;

  constructor(private store: Store<fromNotes.State>) { }

  ngOnInit() {
    this.notebooks$ = this.store.pipe(
      select(fromNotes.getNotebooks),
      tap(nbs => console.log(JSON.stringify(nbs)))
    );

    this.selectedNotebook$ = this.store.pipe(
      tap(console.log),
      select(fromNotes.getCurrentNotebook)
    );

    this.selectedNote$ = this.store.pipe(
      select(fromNotes.getCurrentNote)
    );
  }

  selectNote() {
  }
}
