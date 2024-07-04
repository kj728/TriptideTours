import { HttpEvent, HttpHandler, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function TokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

    if (req.url === "http://localhost:1000/auth/signup" || "http://localhost:1000/auth/signin") {
        return next(req);
    } else {
        const token = localStorage.getItem('token') as string;
        const modifiedRequest = req.clone({ headers: new HttpHeaders().append('token', token) });
        return next(modifiedRequest)
    }

}

