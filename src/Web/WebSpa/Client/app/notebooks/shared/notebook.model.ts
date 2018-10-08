import { Note } from './note.model';

export class Notebook {
    notebookId: number;
    title: string;
    notes: Note[];
    isDefaultNotebook: boolean;
    selected: boolean;
}
