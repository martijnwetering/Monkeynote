import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notebook } from './shared/notebook.model';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { NotebooksService } from './shared/notebooks.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultNotebookResolverService implements Resolve<Notebook> {

  constructor(private notebooksService: NotebooksService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Notebook> {
    return this.notebooksService.getDefaultNotebook();
  }
}
