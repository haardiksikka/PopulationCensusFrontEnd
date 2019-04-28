import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './models/Index';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string ="http://localhost:61008";
   options = {
    headers: { 'Content-Type': 'multipart/form-data' }
  };
  constructor(private http:HttpClient) { }
  register(user: User) {
    const formData: FormData = new FormData();
    formData.append('FirstName',user.FirstName);
    formData.append('LastName',user.LastName);
    formData.append('Email',user.Email);
    formData.append('Password',user.Password);
    formData.append('Image',user.ImageName);
    formData.append('AdhaarNumber',user.AdhaarNumber);
    console.log(user);
    console.log(formData)
    return this.http.post(this.apiUrl+'/register', formData);
}

  getVolunteer(){
    return this.http.get(this.apiUrl+'/getvolunteers');
  }

  acceptVolunteer(user: User){
    return this.http.post(this.apiUrl+'/acceptrequest',user)
  }
  rejectVolunteer(user: User){
    return this.http.post(this.apiUrl+'/declinerequest',user)
  }
}
