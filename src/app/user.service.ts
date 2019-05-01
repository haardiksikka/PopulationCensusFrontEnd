import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from './models/Index';

import { registerContentQuery } from '@angular/core/src/render3';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string ="http://localhost:61008";
  private db: any;
  
   options = {
    headers: { 'Content-Type': 'multipart/form-data' }
  };
  constructor(private http:HttpClient ) { 
    
  }
 
 
  
   register(user: User) {   
      const formData: FormData= new FormData();
        formData.set('FirstName',user.FirstName);
        formData.set('LastName',user.LastName);
        formData.set('Email',user.Email);
        formData.set('Password',user.Password);
        formData.set('Image',user.ImageName);
        formData.set('AdhaarNumber',user.AdhaarNumber);
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

  getGraphData(){
    return this.http.get(this.apiUrl+'/getdata');
  }
  
 
}
