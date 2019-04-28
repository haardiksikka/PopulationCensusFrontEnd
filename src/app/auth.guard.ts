import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  token: any;
  role: any;
  constructor(private route: Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // this.token=localStorage.getItem('currentUser');
      // this.role  = this.token.Role;
      // const expectedRole = next.data.expectedRole;
      // const status =this.token.Status;
   // if (localStorage.getItem('currentUser')) {
        // logged in so return true
         // if(this.role===expectedRole)
                return true;
   // }
    // else if(localStorage.getItem('currentUser') && this.role==="Volunteer"){
    //   if(status===expectedRole)
    //     return true
    // }
   // return false;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
