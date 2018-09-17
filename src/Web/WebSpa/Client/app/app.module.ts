import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { NotesComponent } from './notes/notes.component';
import { RequireAuthenticatedUserRouteGuardService } from './shared/require-authenticated-user-route-guard.service'
import { OpenIdConnectService } from './shared/open-id-connect.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninOidcComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RequireAuthenticatedUserRouteGuardService,
    OpenIdConnectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
