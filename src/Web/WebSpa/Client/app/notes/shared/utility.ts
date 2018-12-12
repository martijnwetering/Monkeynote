import { SortOrder, SortKey } from '../state/note.reducer';
import { Note } from './note.model';
import { compareAsc, compareDesc } from 'date-fns';

export function sortNotes(items: Array<Note>, key: SortKey, order: SortOrder) {
  const notes = [...items];
  switch (key) {
    case SortKey.Id:
      return notes.sort((a, b) => {
        if (order === SortOrder.Ascending) {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });

    case SortKey.Date:
      if (order === SortOrder.Ascending) {
        return notes.sort((a, b) => compareAsc(a.created, b.created));
      } else {
        return notes.sort((a, b) => compareDesc(a.created, b.created));
      }

    default:
      return notes;
  }
}
