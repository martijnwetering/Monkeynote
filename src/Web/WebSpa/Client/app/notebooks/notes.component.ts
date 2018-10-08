import { Component, OnInit } from '@angular/core';
import { Notebook } from './shared/notebook.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from './shared/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      const notebookId = data['defaultNotebook'][0].notebookId;
      this.router.navigate(['/notes/list', notebookId], { queryParams: { defaultNotebook: true } });
    });
  }
}
