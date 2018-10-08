import { Component, OnInit } from '@angular/core';
import { Notebook } from '../shared/notebook.model';
import { NotebooksService } from '../shared/notebooks.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, map } from 'rxjs/operators';
import { Note } from '../shared/note.model';

import * as QuillNamespace from 'quill';
const Quill: any = QuillNamespace;

// override p with div tag
const Parchment = Quill.import('parchment');
const Block = Parchment.query('block');

Block.tagName = 'DIV';
// or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
Quill.register(Block /* or NewBlock */, true);

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notebook: Notebook;
  selectedNote: Note;

  constructor(
    private route: ActivatedRoute,
    private notebooksService: NotebooksService) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams['defaultNotebook']) {
      this.route.data.subscribe(data => {
        this.notebook = data['defaultNotebook'];
        this.selectedNote = this.notebook.notes[0];
      });
    } else {
      this.route.params.pipe(
        map(params => params['notebookId']),
        mergeMap(notebookId => this.notebooksService.getNotebook(notebookId))
      ).subscribe(notebook => {
        this.notebook = notebook;
        this.selectedNote = this.notebook.notes[0];
      });
    }
  }

  selectNote(note: Note) {
    this.selectedNote = note;
  }
}
