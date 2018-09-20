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
  
  constructor(private _httpClient: HttpClient) { }

  getNotebooks(): Observable<Notebook[]> {
    return this._httpClient.get<Notebook[]>(`${this._apiUrl}/notes/notebooks`, 
      { headers: { 'Accept': 'application/json' } });
  }
}
