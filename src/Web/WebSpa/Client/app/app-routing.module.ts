import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequireAuthenticatedUserRouteGuardService } from './shared/require-authenticated-user-route-guard.service';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { RedirectSilentRenewComponent } from './redirect-silent-renew/redirect-silent-renew.component';
import { NotebooksComponent } from './notebooks/notebooks.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'notes', pathMatch: 'full',
    canActivate: [RequireAuthenticatedUserRouteGuardService]
  },
  {
    path: 'notes', component: NotebooksComponent,
    canActivate: [RequireAuthenticatedUserRouteGuardService]
  },
  { path: 'signin-oidc', component: SigninOidcComponent },
    { path: 'redirect-silentrenew', component: RedirectSilentRenewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
