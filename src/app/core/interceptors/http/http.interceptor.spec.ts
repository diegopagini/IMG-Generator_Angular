import { HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HttpInterceptor } from './http.interceptor';

@Injectable()
class MockHttpHandler extends HttpHandler {
  handle(): any {
    return of(null);
  }
}

describe('HttpInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: HttpInterceptor = TestBed.inject(HttpInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should intercept', () => {
    const interceptor: HttpInterceptor = TestBed.inject(HttpInterceptor);
    const request = new HttpRequest('GET', 'test');
    interceptor.intercept(request, new MockHttpHandler());
    expect(interceptor).toBeTruthy();
  });
});
