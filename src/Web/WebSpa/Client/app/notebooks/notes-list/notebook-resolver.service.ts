import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NotebooksService } from '../shared/notebooks.service';
import { Notebook } from '../shared/notebook.model';

@Injectable({
  providedIn: 'root'
})
export class NotebookResolverService implements Resolve<Notebook> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Notebook> {
    return route.parent.data['defaultNotebook'][0];
  }
}
