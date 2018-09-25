import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OpenIdConnectService } from './open-id-connect.service';

@Injectable()
export class RequireAuthenticatedUserRouteGuardService implements CanActivate {

  constructor(private openIdConnectService: OpenIdConnectService,
    private router: Router) { }

  canActivate() {
    let isLoggedIn = this.openIdConnectService.isLoggedInObs()
    isLoggedIn.subscribe((loggedIn) => {
      if (!loggedIn) {
        this.openIdConnectService.triggerSignIn();
      }
    });

    return isLoggedIn;
  }
}
