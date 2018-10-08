import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesSideNavComponent } from './notes-side-nav.component';

describe('NotesSideNavComponent', () => {
  let component: NotesSideNavComponent;
  let fixture: ComponentFixture<NotesSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
