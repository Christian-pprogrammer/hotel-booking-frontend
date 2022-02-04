import { AppErrorHandler } from './../common/app-error-handler';
import { AppBadRequestError } from './../common/app-bad-request-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:5000/'
  signup(payload: any) {
    return this.http.post<{token: string, user: object}>(this.url + 'users/signup', payload)
      .pipe(
        map((res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          return res.user;
        }),
        catchError((error: Response) => {
          if(error.status == 400) {
            return throwError(new Error('bad request'));
          }else{
            return throwError(new Error('unknown error'));
          }
        })
      )
  }
}