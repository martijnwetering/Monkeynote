import { Injectable } from '@angular/core';
import { NoteService } from '../shared/note.service';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { NoteActionTypes, UpdateNote } from './note.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import * as noteActions from './note.actions';
import { of } from 'rxjs';
import { Note } from '../shared/note.model';

@Injectable()
export class NoteEffectsService {
  constructor(private noteService: NoteService, private actions$: Actions) {}

  @Effect()
  loadNotebooks$ = this.actions$.pipe(
    ofType(NoteActionTypes.Load),
    mergeMap(_ =>
      this.noteService.getNotebooksWithDefaultNotebook().pipe(
        map(notebooks => new noteActions.LoadSuccess(notebooks)),
        catchError(error => of(new noteActions.LoadFail(error)))
      )
    )
  );

  @Effect()
  saveNote$ = this.actions$.pipe(
    ofType(NoteActionTypes.UpdateNote),
    mergeMap((action: UpdateNote) => {
      return this.noteService.updateNote(action.payload.note, action.payload.notebookId).pipe(
        map(
          (note: Note) =>
            new noteActions.UpdateNoteSuccess({
              notebookId: action.payload.notebookId,
              note: note
            })
        ),
        catchError(error => of(new noteActions.UpdateNoteFail(error)))
      );
    })
  );

  @Effect()
  newNote = this.actions$.pipe(
    ofType(NoteActionTypes.NewNote),
    mergeMap((action: noteActions.NewNote) => {
      const { note, notebookId } = action.payload;
      return this.noteService.addNote(note, notebookId).pipe(
        map((n: Note) => new noteActions.NewNoteSuccess({ note: n, notebookId })),
        catchError(error => of(new noteActions.NewNoteFail(error)))
      );
    })
  );
}
