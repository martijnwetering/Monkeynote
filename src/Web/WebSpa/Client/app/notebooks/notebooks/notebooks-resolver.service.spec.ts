import { TestBed } from '@angular/core/testing';

import { NotebooksResolverService } from './notebooks-resolver.service';

describe('NotebooksResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotebooksResolverService = TestBed.get(NotebooksResolverService);
    expect(service).toBeTruthy();
  });
});
