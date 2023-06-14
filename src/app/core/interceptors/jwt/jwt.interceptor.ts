import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private readonly _jwtService: JwtHelperService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this._jwtService.tokenGetter();

    const clonedRequest = request.clone({
      setHeaders: {
        'x-token': `Bearer ${token}`,
      },
    });

    return next.handle(clonedRequest);
  }
}
