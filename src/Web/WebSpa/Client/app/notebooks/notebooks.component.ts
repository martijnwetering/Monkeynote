import { Component, OnInit } from '@angular/core';
import { Notebook } from './shared/notebook.model';
import { NotebooksService } from './shared/notebooks.service';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss']
})
export class NotebooksComponent implements OnInit {

  notebooks: Notebook[];

  constructor(private _notebooksService: NotebooksService) { }

  ngOnInit() {
    this._notebooksService.getNotebooks()
      .subscribe(
        notebooks => this.notebooks = notebooks
      );
  }
}
