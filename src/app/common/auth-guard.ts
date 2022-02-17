import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn: boolean = this.authService.isLoggedIn();
  constructor(private authService: AuthService) {
    this.authService.currentUserSubject.subscribe(data=> {
      this.isLoggedIn = data.loggedIn;
    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | boolean {
      if(this.isLoggedIn) {
        return true;
      }else{
        return false;
      }
  }

}
