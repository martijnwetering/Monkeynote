import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Notebook } from './shared/notebook.model';
import { Observable } from 'rxjs';
import { NotebooksService } from './shared/notebooks.service';

@Injectable({
  providedIn: 'root'
})
export class NotebooksResolverService implements Resolve<Notebook[]> {

  constructor(private notebooksService: NotebooksService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Notebook[] | Observable<Notebook[]> | Promise<Notebook[]> {
    return this.notebooksService.getNotebooks();
  }
}
