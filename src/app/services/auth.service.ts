import { Router } from '@angular/router';
import { AppErrorHandler } from './../common/app-error-handler';
import { AppBadRequestError } from './../common/app-bad-request-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject = BehaviorSubject<any>()
  constructor(private http: HttpClient, private router: Router) { }
  url = 'http://localhost:5000/'
  signup(payload: any) {
    return this.http.post<{token: string, user: object}>(this.url + 'users/signup', payload)
      .pipe(
        map((res) => {
          console.log(res);
          this.storeToken(res.token);
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

  login(payload: any) {
    return this.http.post<{token: string, user: object}>(this.url + 'users/login', payload)
      .pipe(
        map(res=>{
          this.storeToken(res.token);
        }),
        catchError(err=>{
          if(err.status == 400) {
            alert('bad request');
            return throwError(new Error('bad request'));
          }else{
            alert('unknown error');
            return throwError(new Error('unknown error'));
          }
        })
      )
  }
  storeToken(token: any) {
    localStorage.setItem('token', token);
  }
  isLoggedIn() {
    const jwtHelperService = new JwtHelperService();
    const decodedToken = jwtHelperService.decodeToken(localStorage.getItem('token'));
    const isExpired = jwtHelperService.isTokenExpired(localStorage.getItem('token'));
    if(!decodedToken || isExpired) {
      return false;
    }else{
      return true;
    }
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
