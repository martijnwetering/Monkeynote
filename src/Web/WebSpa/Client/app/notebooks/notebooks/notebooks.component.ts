import { Component, OnInit } from '@angular/core';
import { Notebook } from '../shared/notebook.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss']
})
export class NotebooksComponent implements OnInit {

  notebooks: Notebook[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.notebooks = data['notebooks']);
  }
}
