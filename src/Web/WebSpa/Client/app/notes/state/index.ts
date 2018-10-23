import * as fromNotes from './note.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Notebook } from '../shared/notebook.model';

export interface State {
  notes: fromNotes.NoteState;
}

const getNoteFeatureState = createFeatureSelector<fromNotes.NoteState>('notes');

export const getNotebooks = createSelector(
    getNoteFeatureState,
    state => state.notebooks
);

export const getNotebookList = createSelector(
  getNoteFeatureState,
  state => <Notebook[]>state.notebooks.map((nb: Notebook) => ({
    id: nb.id,
    title: nb.title,
    selected: nb.selected,
    defaultNotebook: nb.defaultNotebook
  }))
);

export const getCurrentNotebookId = createSelector(
  getNoteFeatureState,
  state => state.selectedNotebookId ? state.selectedNotebookId : 0
);

export const getCurrentNoteId = createSelector(
  getNoteFeatureState,
  state => state.selectedNoteId ? state.selectedNoteId : 0
);

export const getCurrentNotebook = createSelector(
  getNoteFeatureState,
  getCurrentNotebookId,
  (state, currentNotebookId) => {
    if (currentNotebookId > 0) {
      return state.notebooks.find(nb => nb.id === currentNotebookId);
      }
  }
);

export const getCurrentNote = createSelector(
  getCurrentNotebook,
  getCurrentNoteId,
  (currentNotebook, currentNoteId) => {
    if (currentNotebook && currentNoteId > 0) {
      return currentNotebook.notes.find(n => n.id === currentNoteId);
      }
  }
);
