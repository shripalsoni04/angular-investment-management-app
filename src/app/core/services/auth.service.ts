import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  private loggedInUser: any = {email: '', passowrd: ''};

  constructor() { }

  login(email, password) {
    this.loggedInUser = { email, password };
    return Observable.of({
      token: '12323'
    });
  }

  isLoggedIn() {
    return !!this.loggedInUser;
  }
}
