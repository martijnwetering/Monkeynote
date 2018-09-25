import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequireAuthenticatedUserRouteGuardService } from './shared/require-authenticated-user-route-guard.service';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'notes', pathMatch: 'full',
    canActivate: [RequireAuthenticatedUserRouteGuardService]
  },
  { path: 'signin-oidc', component: SigninOidcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
