import { Notebook } from '../shared/notebook.model';
import { NoteActions, NoteActionTypes } from './note.actions';

export enum SortKey {
  Id,
  Title,
  DateDescending
}

export enum SortOrder {
  Ascending,
  Descending
}

export interface NoteState {
  notebooks: Notebook[];
  selectedNotebookId: number;
  selectedNoteId: number;
  error: string;
  SortKey: SortKey;
  SortOrder: SortOrder;
}

const initialState: NoteState = {
  notebooks: [],
  selectedNotebookId: 0,
  selectedNoteId: 0,
  error: '',
  SortKey: SortKey.Id,
  SortOrder: SortOrder.Ascending
};

export function reducer(state: NoteState = initialState, action: NoteActions): NoteState {
  switch (action.type) {
    case NoteActionTypes.LoadSuccess:
      let defaultNotebook = action.payload.find(nb => nb.defaultNotebook);
      return {
        ...state,
        notebooks: action.payload,
        selectedNotebookId: defaultNotebook.id,
        selectedNoteId: defaultNotebook.notes[0].id,
        error: ''
      };

    case NoteActionTypes.LoadFail:
      return {
        ...state,
        notebooks: [],
        error: action.payload
      };

    case NoteActionTypes.SelectNote:
      return {
        ...state,
        selectedNoteId: action.payload
      };

    case NoteActionTypes.UpdateNoteSuccess:
      let notebook = state.notebooks.find(nb => nb.id === action.payload.notebookId);
      let notes = notebook.notes
        .filter(n => n.id !== action.payload.note.id)
        .concat(action.payload.note);

      let newNotebook = {
        ...notebook,
        notes: notes
      };

      let newNotebooks = state.notebooks
        .filter(nb => nb.id !== action.payload.notebookId)
        .concat(newNotebook);

      return {
        ...state,
        notebooks: newNotebooks
      };

    case NoteActionTypes.SelectNotebook:
      const notebookId = action.payload;
      const selectedNotebook = state.notebooks.find(nb => nb.id === notebookId);
      return {
        ...state,
        selectedNotebookId: notebookId,
        selectedNoteId: selectedNotebook.notes[0].id
      };

    case NoteActionTypes.NewNoteSuccess:
      const notebooks = state.notebooks.slice();
      notebooks.find(nb => nb.id === action.payload.notebookId).notes.push(action.payload.note);

      return {
        ...state,
        notebooks: notebooks,
        selectedNoteId: action.payload.note.id
      };

    default:
      return state;
  }
}
