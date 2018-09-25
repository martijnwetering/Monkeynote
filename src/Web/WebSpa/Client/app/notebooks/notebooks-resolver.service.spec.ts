import { TestBed, inject } from '@angular/core/testing';

import { NotebooksResolverService } from './notebooks-resolver.service';

describe('NotebooksResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotebooksResolverService]
    });
  });

  it('should be created', inject([NotebooksResolverService], (service: NotebooksResolverService) => {
    expect(service).toBeTruthy();
  }));
});
