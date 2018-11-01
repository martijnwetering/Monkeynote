import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Notebook } from '../shared/notebook.model';
import { Note } from '../shared/note.model';
import * as fromNotes from '../state';
import * as noteActions from '../state/note.actions';
import * as fromQuill from 'quill';
import { Store, select } from '@ngrx/store';
import { Observable, interval } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, takeWhile } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { default as Delta } from 'quill-delta';

// const Quill: any = fromQuill;

// // override p with div tag
// const Parchment = Quill.import('parchment');
// const Block = Parchment.query('block');

// Block.tagName = 'DIV';
// // or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
// Quill.register(Block /* or NewBlock */, true);

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit, OnDestroy {
  notebook$: Observable<Notebook>;
  notesSorted$: Observable<Note[]>;
  note$: Observable<Note>;
  titleFormControl: FormControl;
  textFormControl: FormControl;
  modules = { toolbar: ['bold', 'italic', 'underline', 'strike'] };
  private componentActive = true;
  private selectedNoteSnapshot: Note;
  private selectedNotebookId: number;

  @ViewChild('editor')
  set setEditor(editor: QuillEditorComponent) {
    this.editor = editor;
  }
  editor: QuillEditorComponent;

  constructor(private store: Store<fromNotes.State>, private fb: FormBuilder) {
    this.titleFormControl = fb.control('');
    this.textFormControl = fb.control('');
  }

  ngOnInit() {
    this.notebook$ = this.store.pipe(
      select(fromNotes.getCurrentNotebook),
      tap(notebook => (notebook ? (this.selectedNotebookId = notebook.id) : 0))
    );

    this.notesSorted$ = this.store.pipe(
      select(fromNotes.getCurrentNotesSorted)
    );

    this.note$ = this.store.pipe(
      select(fromNotes.getCurrentNote),
      tap(console.log),
      tap(note => {
        if (note) {
          this.selectedNoteSnapshot = note;
          this.titleFormControl.setValue(note.title);
          this.textFormControl.setValue(note.text);
        }
      })
    );

    // Todo:
    // - save on 30 sec interval
    // - save on new note
    // - save on close tab
    // - save when navigating away
    // - save on blur text or title pane
    interval(5000)
      // .pipe(takeWhile(_ => this.componentActive))
      .subscribe(_ => {
        let title = this.titleFormControl.value;
        let delta = new Delta(this.textFormControl.value);
        if (
          delta.diff(new Delta(this.selectedNoteSnapshot.text.ops)).length() > 0 ||
          title !== this.selectedNoteSnapshot.title
        ) {
          let note: Note = {
            id: this.selectedNoteSnapshot.id,
            title: title,
            text: delta
          };
          this.store.dispatch(
            new noteActions.UpdateNote({ notebookId: this.selectedNotebookId, note })
          );
        }
      });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  selectNote(id: number) {
    this.store.dispatch(new noteActions.SelectNote(id));
  }

  contentChanged($event) {
    console.log('content changed: ', $event);
  }

  editorCreated($event) {
    $event.focus();
  }
}
