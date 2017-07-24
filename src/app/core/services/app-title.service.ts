import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppTitleService {

  title$: Subject<string> = new Subject();

  constructor() { }

  setTitle(title) {
    this.title$.next(title);
  }
}
