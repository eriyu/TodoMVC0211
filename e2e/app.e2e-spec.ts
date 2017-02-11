import { TodoMVC0211Page } from './app.po';

describe('todo-mvc0211 App', function() {
  let page: TodoMVC0211Page;

  beforeEach(() => {
    page = new TodoMVC0211Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
