import { TestBed } from '@angular/core/testing';

import { NotebookResolverService } from './notebook-resolver.service';

describe('NotebookResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotebookResolverService = TestBed.get(NotebookResolverService);
    expect(service).toBeTruthy();
  });
});
