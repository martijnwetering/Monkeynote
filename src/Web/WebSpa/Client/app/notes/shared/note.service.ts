import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Notebook } from './notebook.model';
import { Note } from './note.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private _apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getNotebooks(): Observable<Notebook[]> {
    return this.httpClient.get<Notebook[]>(`${this._apiUrl}/notes/notebooks`, this.getHeaders());
  }

  getNotebooksWithDefaultNotebook(): Observable<Notebook[]> {
    return this.httpClient.get<Notebook[]>(`${this._apiUrl}/notes/notebooks`, this.getHeaders());
  }

  getNotebook(notebookId: number): Observable<Notebook> {
    return this.httpClient.get<Notebook>(`${this._apiUrl}/notes/notebooks/${notebookId}`, this.getHeaders());
  }

  addNote(note: Note, notebookId: number ): Observable<Note> {
    return this.httpClient.post<Note>(`${this._apiUrl}/notes/notebooks/${notebookId}/notes`, note, this.getHeaders());
  }

  updateNote(note: Note, notebookId: number): any {
    return this.httpClient.put<Note>(`${this._apiUrl}/notes/notebooks/${notebookId}/notes/${note.id}`,
      note, this.getHeaders()).pipe(tap(console.log));
  }

  private getHeaders() {
    return { headers: { 'Accept': 'application/json' } };
  }
}
