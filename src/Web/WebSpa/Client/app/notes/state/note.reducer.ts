import { Notebook } from '../shared/notebook.model';
import { NoteActions, NoteActionTypes } from './note.actions';

export interface NoteState {
  notebooks: Notebook[];
  selectedNotebookId: number;
  selectedNoteId: number;
  error: string;
}

const initialState: NoteState = {
  notebooks: [],
  selectedNotebookId: 0,
  selectedNoteId: 0,
  error: ''
};

export function reducer(state: NoteState = initialState, action: NoteActions): NoteState {
  switch (action.type) {

    case NoteActionTypes.LoadSuccess:
      return {
        ...state,
        notebooks: action.payload,
        selectedNotebookId: action.payload.find(nb => nb.selected).id
      };

    case NoteActionTypes.LoadFail:
      return {
        ...state,
        notebooks: [],
        error: action.payload
      };

    default:
      return state;
  }
}
