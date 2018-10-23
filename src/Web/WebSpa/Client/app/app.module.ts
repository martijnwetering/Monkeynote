import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { RequireAuthenticatedUserRouteGuardService } from './shared/require-authenticated-user-route-guard.service';
import { OpenIdConnectService } from './shared/open-id-connect.service';
import { RedirectSilentRenewComponent } from './redirect-silent-renew/redirect-silent-renew.component';
import { WriteOutJsonInterceptor } from './shared/write-out-json-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EnsureAcceptHeaderInterceptor } from './shared/ensure-accept-header-interceptor';
import { AddAuthorizationHeaderInterceptor } from './shared/add-authorization-header-interceptor';
import { NotesModule } from './notes/note.module';
import { UiModule } from './ui/ui.module';
import { environment } from 'Client/environments/environment';
import { HttpClientInMemoryWebApiModule, InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/in-memory-data.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const inMemoryDbArgs: InMemoryBackendConfigArgs = {
  delay: 100,
  apiBase: 'api/v1/notes'
};

@NgModule({
  declarations: [
    AppComponent,
    SigninOidcComponent,
    RedirectSilentRenewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NotesModule,
    UiModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Monkeynote App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    !environment.production ?
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, inMemoryDbArgs) : []
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
    OpenIdConnectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
