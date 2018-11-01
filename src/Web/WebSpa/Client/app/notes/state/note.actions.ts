import { Action } from '@ngrx/store';
import { Notebook } from '../shared/notebook.model';
import { Note } from '../shared/note.model';
import { Delta } from 'quill';
import { List } from 'immutable';

export enum NoteActionTypes {
  Load = '[Note] Load',
  LoadSuccess = '[Note] Load Success',
  LoadFail = '[Note] Load Fail',
  SelectNote = '[Note] Select Note',
  UpdateNote = '[Note] Update Note',
  UpdateNoteSuccess = '[Note] Update Note Success',
  UpdateNoteFail = '[Note] Update Note Fail',
  NewNote = '[Note] New Note',
  NewNoteSuccess = '[Note] New Note Success',
  NewNoteFail = '[Note] New Note Fail',
  SelectNotebook = '[Notebook] Select Notebook'
}

export class Load implements Action {
  type = NoteActionTypes.Load;

  constructor(public payload: any = null) { }
}

export class LoadSuccess implements Action {
  type = NoteActionTypes.LoadSuccess;

  constructor(public payload: Notebook[]) { }
}

export class LoadFail implements Action {
  type = NoteActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export class SelectNote implements Action {
  type = NoteActionTypes.SelectNote;

  constructor(public payload: number) { }
}

export class UpdateNote implements Action {
  type = NoteActionTypes.UpdateNote;

  constructor(public payload: {notebookId: number, note: Note}) { }
}

export class UpdateNoteSuccess implements Action {
  type = NoteActionTypes.UpdateNoteSuccess;

  constructor(public payload: {notebookId: number, note: Note}) { }
}

export class UpdateNoteFail implements Action {
  type = NoteActionTypes.UpdateNoteFail;

  constructor(public payload: string) { }
}

export class NewNote implements Action {
  type = NoteActionTypes.NewNote;

  constructor(public payload: {note: Note, notebookId: number}) { }
}

export class NewNoteSuccess implements Action {
  type = NoteActionTypes.NewNoteSuccess;

  constructor(public payload: {note: Note, notebookId: number}) { }
}

export class NewNoteFail implements Action {
  type = NoteActionTypes.NewNoteFail;

  constructor(public payload: string) { }
}

export class SelectNotebook implements Action {
  type = NoteActionTypes.SelectNotebook;

  constructor(public payload: number) { }
}

export type NoteActions = LoadSuccess
  | LoadFail
  | Load
  | SelectNote
  | UpdateNote
  | NewNote
  | SelectNotebook;
