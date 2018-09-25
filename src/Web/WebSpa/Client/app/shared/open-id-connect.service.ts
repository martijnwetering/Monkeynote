import { Injectable } from '@angular/core';
import { UserManager, User, Log } from 'oidc-client';
import { environment } from '../../environments/environment';
import { ReplaySubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

Log.logger = console;
Log.level = Log.DEBUG;

@Injectable({
  providedIn: 'root'
})
export class OpenIdConnectService {

  private userManager: UserManager = new UserManager(environment.openIdConnectSettings);
  private currentUser: User;
  private loggedIn: boolean = false;


  userLoaded$ = new ReplaySubject<boolean>(1);

  get userAvailable(): boolean {
    return this.currentUser != null;
  }

  get user(): User {
    return this.currentUser;
  }

  constructor() {
    this.userManager.clearStaleState();

    this.userManager.getUser().then(user => {
      if (user) {
        this.currentUser = user;
        this.loggedIn = true;
        this.userLoaded$.next(true);
      } else {
        this.loggedIn = false;
        this.userLoaded$.next(false);
      }
    }).catch(err => {
      this.loggedIn = false;
    });

    this.userManager.events.addUserLoaded(user => {
      if (!environment.production) {
        console.log('User loaded.', user);
      }
      this.currentUser = user;
      this.loggedIn = true;
      this.userLoaded$.next(true);
    });

    this.userManager.events.addUserUnloaded((e) => {
      if (!environment.production) {
        console.log('User unloaded');
      }
      this.currentUser = null;
      this.loggedIn = false;
      this.userLoaded$.next(false);
    });

  }

  isLoggedInObs(): Observable<boolean> {
    return from(this.userManager.getUser())
      .pipe(
        map<User, boolean>(user => {
          if (user) {
            return true;
          } else {
            return false;
          }
        })
      );
  }

  triggerSignIn() {
    this.userManager.signinRedirect().then(function () {
      if (!environment.production) {
        console.log('Redirection to signin triggered.');
      }
    });
  }

  handleCallback() {
    this.userManager.signinRedirectCallback().then(user => {
      if (!environment.production) {
        console.log('Callback after signin handled.', user);
      }
    });
  }

  handleSilentCallback() {
    this.userManager.signinSilentCallback().then(user => {
      this.currentUser = user
      if (!environment.production) {
        console.log('Callback after silent signin handled.', user);
      }
    });
  }

  triggerSignOut() {
    this.userManager.signoutRedirect().then(function (resp) {
      if (!environment.production) {
        console.log('Redirection to sign out triggered.', resp);
      }
    });
  };
}
