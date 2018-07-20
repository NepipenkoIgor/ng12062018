import {AppPage} from './app.po';

import * as fs from 'fs';
import {browser} from 'protractor';
import {SearchWidget} from './search.wg';
import {UsersListWidget} from './users-list.wg';

function screen(name: string) {
  browser.takeScreenshot()
    .then((png: string) => {
      const stream: fs.WriteStream = fs.createWriteStream(`./${name}.png`);
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
}


describe('workspace-project App', () => {
  const searchWidget: SearchWidget = new SearchWidget();
  const usersListWidget: UsersListWidget = new UsersListWidget();

  beforeEach(() => {
    browser.get('/');
  });

  it('should search by term', () => {
    screen('img1');
    searchWidget.search('юлasdasdasd');
    screen('img2');
    expect(usersListWidget.cards.count())
      .toEqual(0);
    searchWidget.searchInput.clear();
    searchWidget.search('юл');
    screen('img3');
    expect(usersListWidget.cards.count())
      .toEqual(1);
  });
});
