import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Notebook } from './notebook.model';

@Injectable({
  providedIn: 'root'
})
export class NotebooksService {
  private _apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getNotebooks(): Observable<Notebook[]> {
    return this.httpClient.get<Notebook[]>(`${this._apiUrl}/notes/notebooks`, this.getHeaders());
  }

  getNotebook(notebookId: number): Observable<Notebook> {
    return this.httpClient.get<Notebook>(`${this._apiUrl}/notes/notebooks/${notebookId}`, this.getHeaders());
  }

  getDefaultNotebook() {
    return this.httpClient.get<Notebook>(`${this._apiUrl}/notes/notebooks?isDefaultNotebook=true`, this.getHeaders());
  }

  private getHeaders() {
    return { headers: { 'Accept': 'application/json' } };
  }
}
