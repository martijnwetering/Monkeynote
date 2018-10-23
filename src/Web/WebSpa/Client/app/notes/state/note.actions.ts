import { Action } from '@ngrx/store';
import { Notebook } from '../shared/notebook.model';

export enum NoteActionTypes {
  Load = '[Note] Load',
  LoadSuccess = '[Note] Load Success',
  LoadFail = '[Note] Load Fail'
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

export type NoteActions = LoadSuccess
  | LoadFail
  | Load;
