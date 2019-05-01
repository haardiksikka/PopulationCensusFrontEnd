import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class StatusGuard implements CanActivate {
  token: any;
  status: any;
  constructor(private route: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
     
      if(localStorage.getItem('currentUser')){
       
        const payLoad=JSON.parse( localStorage.getItem('currentUser'))
        this.status  = payLoad.Status;
        const expectedStatus = next.data.expectedStatus;
          if(this.status===expectedStatus)
               return true;
      }
      this.route.navigate(['login']);
      return false;
    
  }
  
}
