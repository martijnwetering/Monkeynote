import * as fromNotes from './note.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Notebook } from '../shared/notebook.model';
import { Note } from '../shared/note.model';
import { compareDesc, compareAsc } from 'date-fns';
import { sortNotes } from '../shared/utility';

export interface State {
  notes: fromNotes.NoteState;
}

const getNoteFeatureState = createFeatureSelector<fromNotes.NoteState>('notes');

export const getNotebooks = createSelector(getNoteFeatureState, state => state.notebooks);

export const getNotebookList = createSelector(
  getNoteFeatureState,
  state => <Notebook[]>state.notebooks.map((nb: Notebook) => ({
      id: nb.id,
      title: nb.title,
      defaultNotebook: nb.defaultNotebook
    }))
);

export const getCurrentNotebookId = createSelector(
  getNoteFeatureState,
  state => state.selectedNotebookId
);

export const getCurrentNoteId = createSelector(getNoteFeatureState, state => state.selectedNoteId);

export const getCurrentNotebook = createSelector(
  getNoteFeatureState,
  getCurrentNotebookId,
  (state, currentNotebookId) => {
    if (currentNotebookId <= 0) {
      return;
    }

    return state.notebooks.find(nb => nb.id === currentNotebookId);
  }
);

export const getCurrentNotesSorted = createSelector(
  getNoteFeatureState,
  getCurrentNotebook,
  (state, currentNotebook) => {
    if (!currentNotebook) {
      return;
    }
    return sortNotes(currentNotebook.notes, state.SortKey, state.SortOrder);
  }
);

export const getCurrentNote = createSelector(
  getCurrentNotebook,
  getCurrentNoteId,
  (currentNotebook, currentNoteId) => {
    if (currentNoteId <= 0) {
      return;
    }
    return currentNotebook.notes.find(n => n.id === currentNoteId);
  }
);
