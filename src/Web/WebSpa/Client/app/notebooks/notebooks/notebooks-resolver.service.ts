import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { NotebooksService } from '../shared/notebooks.service';
import { Observable } from 'rxjs';
import { Notebook } from '../shared/notebook.model';

@Injectable({
  providedIn: 'root'
})
export class NotebooksResolverService implements Resolve<Notebook[]> {

  constructor(private notebooksService: NotebooksService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Notebook[]> {
    return this.notebooksService.getNotebooks();
  }
}
