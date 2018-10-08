import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotebooksService } from './shared/notebooks.service';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesSideNavComponent } from './notes-side-nav/notes-side-nav.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    QuillModule
  ],
  declarations: [
    NotesComponent,
    NotesListComponent,
    NotesSideNavComponent,
    NotebooksComponent
  ],
  providers: [
    NotebooksService
  ]
})
export class NotesModule { }
