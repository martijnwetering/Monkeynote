// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5200/api/v1',
  openIdConnectSettings: {
    authority: 'http://localhost:5310/',
    client_id: 'monkeynotewebclient',
    redirect_uri: 'http://localhost:4200/signin-oidc',
    scope: 'openid profile roles monkeynote.notes.api',
    response_type: 'id_token token',
    post_logout_redirect_uri: 'http://localhost:4200/',
    automaticSilentRenew: true,
    silent_redirect_uri: 'http://localhost:4200/silent-renew.html'
  }
};
