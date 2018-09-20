import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { RequireAuthenticatedUserRouteGuardService } from './shared/require-authenticated-user-route-guard.service'
import { OpenIdConnectService } from './shared/open-id-connect.service';
import { RedirectSilentRenewComponent } from './redirect-silent-renew/redirect-silent-renew.component';
import { WriteOutJsonInterceptor } from './shared/write-out-json-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EnsureAcceptHeaderInterceptor } from './shared/ensure-accept-header-interceptor';
import { AddAuthorizationHeaderInterceptor } from './shared/add-authorization-header-interceptor';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { NotebooksService } from './notebooks/shared/notebooks.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninOidcComponent,
    RedirectSilentRenewComponent,
    NotebooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WriteOutJsonInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EnsureAcceptHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddAuthorizationHeaderInterceptor,
      multi: true,
      deps: [ OpenIdConnectService ]
    },
    RequireAuthenticatedUserRouteGuardService,
    OpenIdConnectService,
    NotebooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
