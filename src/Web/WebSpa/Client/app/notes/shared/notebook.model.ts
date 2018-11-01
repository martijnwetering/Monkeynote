import { Note } from './note.model';

export class Notebook {
    id: number;
    title: string;
    notes: Note[] = [];
    defaultNotebook: boolean;
}
