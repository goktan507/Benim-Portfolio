import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  
  // Authentication for Admin panel if someone leakes the secret route
  // They will not be authorized to access admin-components without logging in
  // with the Admin account
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (sessionStorage.getItem('username') == 'safabayraktar' && sessionStorage.getItem('password') == 'Goktan150150');
  }
  
}
