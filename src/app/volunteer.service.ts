import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HouseListing} from './models/Index';
import {Population} from './models/Index';
 
@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  options = {
    headers: { 'Content-Type': 'application/json' }
  };
  constructor(private http: HttpClient) { }
  //apiUrl:string="http://localhost/61008";
  apiUrl:string ="http://localhost:61008";
  registerHouse(house: HouseListing){
    console.log(house);
    return this.http.post(this.apiUrl+'/house', house, this.options);
  }
  registerMember(member: Population){
    return this.http.post(this.apiUrl+'/sendmember', member);
  }
}
