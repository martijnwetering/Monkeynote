import { Component, OnInit } from '@angular/core';
import { Notebook } from './shared/notebook.model';
import { NotebooksService } from './shared/notebooks.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { pipe } from '@angular/core/src/render3/pipe';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss']
})
export class NotebooksComponent implements OnInit {

  notebooks: Notebook[];
  selectedNotebook: Notebook;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.notebooks = data['notebooks'];
      this.notebooks[0].selected = true;
      this.selectedNotebook = this.notebooks[0];
    });
  }
}
