import { NotebooksModule } from './notebooks.module';

describe('NotebooksModule', () => {
  let notebooksModule: NotebooksModule;

  beforeEach(() => {
    notebooksModule = new NotebooksModule();
  });

  it('should create an instance', () => {
    expect(notebooksModule).toBeTruthy();
  });
});
