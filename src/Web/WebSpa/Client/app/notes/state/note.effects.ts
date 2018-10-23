import { Injectable } from '@angular/core';
import { NoteService } from '../shared/note.service';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { NoteActionTypes } from './note.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import * as noteActions from './note.actions';
import { of } from 'rxjs';

@Injectable()
export class NoteEffectsService {

  constructor(private noteService: NoteService,
    private actions$: Actions) { }

  @Effect()
  loadNotebooks$ = this.actions$.pipe(
    ofType(NoteActionTypes.Load),
    mergeMap(_ =>
      this.noteService.getNotebooksWithDefaultNotebook().pipe(
        tap(notebooks => console.log(notebooks)),
        map(notebooks => new noteActions.LoadSuccess(notebooks)),
        catchError(error => of(new noteActions.LoadFail(error))
        ))
    ));
}
