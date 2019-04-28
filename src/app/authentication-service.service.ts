import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationServiceService {
  apiURL='http://localhost:61008'
  constructor(private http:HttpClient) { }
  result: any;
  login(email:string, password:string){
    var userData = "UserName=" + email + "&Password=" + password + "&grant_type=password";

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True' });

     return this.http.post<any>(this.apiURL+ '/token', userData,{ headers: reqHeader });

  //    .subscribe(
  //     (user) => {
  //      // login successful if there's a jwt token in the response
  //      this.result=user
  //      if (user && user.access_token) {
  //          // store user details and jwt token in local storage to keep user logged in between page refreshes
  //          localStorage.setItem('currentUser', JSON.stringify(user));
  //      }
 
  //     // return user;
  //  })
  // return this.result;
  }
  

}
