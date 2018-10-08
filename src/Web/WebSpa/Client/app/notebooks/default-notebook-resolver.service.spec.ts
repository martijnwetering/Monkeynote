import { TestBed } from '@angular/core/testing';

import { DefaultNotebookResolverService } from './default-notebook-resolver.service';

describe('DefaultNotebookResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultNotebookResolverService = TestBed.get(DefaultNotebookResolverService);
    expect(service).toBeTruthy();
  });
});
