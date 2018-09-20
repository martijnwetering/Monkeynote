import { Injectable } from '@angular/core';
import { OpenIdConnectService } from './open-id-connect.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {
  private apiUrl: string = environment.apiUrl;

  constructor(private _openIdConnectService: OpenIdConnectService, private _httpClient: HttpClient) { 

  }

  GetNotebooks() {
    this._httpClient.get(`${this.apiUrl}/notes/notebook`);
  }
}
