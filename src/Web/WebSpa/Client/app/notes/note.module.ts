import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { NotesRoutingModule } from './note-routing.module';
import { NotesComponent } from './note.component';
import { NoteService } from './shared/note.service';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesSideNavComponent } from './notes-side-nav/notes-side-nav.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/note.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NoteEffectsService } from './state/note.effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NotesRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    QuillModule,
    StoreModule.forFeature('notes', reducer),
    EffectsModule.forFeature([NoteEffectsService])
  ],
  declarations: [
    NotesComponent,
    NotesListComponent,
    NotesSideNavComponent,
    NotebooksComponent
  ],
  providers: [
    NoteService
  ]
})
export class NotesModule { }
