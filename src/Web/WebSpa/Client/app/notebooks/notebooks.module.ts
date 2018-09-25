import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotebooksRoutingModule } from './notebooks-routing.module';
import { NotebooksComponent } from './notebooks.component';
import { NotebooksService } from './shared/notebooks.service';

@NgModule({
  imports: [
    CommonModule,
    NotebooksRoutingModule
  ],
  declarations: [
    NotebooksComponent
  ],
  providers: [
    NotebooksService
  ]
})
export class NotebooksModule { }
