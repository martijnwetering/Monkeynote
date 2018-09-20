import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { OpenIdConnectService } from "./open-id-connect.service";


export class AddAuthorizationHeaderInterceptor implements HttpInterceptor {
    
    constructor(private openIdConnectService: OpenIdConnectService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req.clone(
            { setHeaders: { Authorization: this.openIdConnectService.user.token_type 
                + " " + this.openIdConnectService.user.access_token } }
        );

        return next.handle(request);
    }
}
