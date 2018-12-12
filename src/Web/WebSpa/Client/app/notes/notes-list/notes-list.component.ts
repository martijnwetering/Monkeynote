import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Notebook } from '../shared/notebook.model';
import { Note } from '../shared/note.model';
import * as fromNotes from '../state';
import * as noteActions from '../state/note.actions';
import { Store, select } from '@ngrx/store';
import { Observable, interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormControl, FormBuilder } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { default as Delta } from 'quill-delta';
import { format } from 'date-fns';
import { Router, NavigationStart, Event } from '@angular/router';

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
  private selectedNoteSnapshot: Note;
  private selectedNotebookId: number;

  @ViewChild('editor')
  set setEditor(editor: QuillEditorComponent) {
    this.editor = editor;
  }
  editor: QuillEditorComponent;

  constructor(private store: Store<fromNotes.State>,
    private router: Router,
    private fb: FormBuilder) {
    this.titleFormControl = fb.control('');
    this.textFormControl = fb.control('');
  }

  ngOnInit() {
    this.notebook$ = this.store.pipe(
      select(fromNotes.getCurrentNotebook),
      tap(notebook => (notebook ? (this.selectedNotebookId = notebook.id) : 0))
    );

    this.notesSorted$ = this.store.pipe(select(fromNotes.getCurrentNotesSorted));

    this.note$ = this.store.pipe(
      select(fromNotes.getCurrentNote),
      tap(note => {
        if (note) {
          this.selectedNoteSnapshot = note;
          this.titleFormControl.setValue(note.title);
          this.textFormControl.setValue(note.text);
        }
      })
    );

    // Todo:
    // [X] save on 30 sec interval
    // [X] save on new note
    // [] save on close tab
    // [X] save when navigating away
    // [X] save on blur text or title pane
    interval(5000)
      // .pipe(takeWhile(_ => this.componentActive))
      .subscribe(_ => {
        this.saveNote();
      });

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.saveNote();
      }
    });
  }

  saveNote() {
    let title = this.titleFormControl.value;
    let delta = new Delta(this.textFormControl.value);
    if (this.noteChanged(title, delta)) {
      let note: Note = {
        id: this.selectedNoteSnapshot.id,
        title: title,
        text: delta,
        tags: this.selectedNoteSnapshot.tags,
        created: this.selectedNoteSnapshot.created
      };
      this.store.dispatch(
        new noteActions.UpdateNote({ notebookId: this.selectedNotebookId, note })
      );
    }
  }

  private noteChanged = (title: string, delta: Delta) =>
    delta.diff(new Delta(this.selectedNoteSnapshot.text.ops)).length() > 0 ||
    title !== this.selectedNoteSnapshot.title

  isSelected = (id: number) => this.selectedNoteSnapshot.id === id;

  ngOnDestroy() {
  }

  selectNote(id: number) {
    this.store.dispatch(new noteActions.SelectNote(id));
  }

  contentChanged() {
    console.log('content changed');
  }

  formatDate(date: Date) {
    return format(date, '[created:] DD MMM');
    // if (isToday(date)) {
    //   return format(differenceInHours(date, new Date()), '[created:] HH ago');
    // } else {
    //   return format(date, '[created:] DD MMM');
    // }
  }

  editorCreated($event) {
    $event.focus();
  }
}
