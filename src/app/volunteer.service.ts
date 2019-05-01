import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HouseListing} from './models/Index';
import {Population} from './models/Index';
import {UnsavedData, UnsavedHouseData, UnsavedPopulationData} from './models/Index'

import {  Observable,forkJoin } from 'rxjs';
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
    //console.log(house);
    if(window.navigator.onLine){
       let houseSavedData:UnsavedHouseData=JSON.parse(localStorage.getItem('unSendHouseData'));
      
      if(houseSavedData){
        var tasks$ = [];
        for(let i=0;i<houseSavedData.Houses.length;i++ ){
          let localData=houseSavedData.Houses[i];
          tasks$.push(this.http.post(this.apiUrl+'/house', localData, this.options));
          

      }
      forkJoin(...tasks$).subscribe(results => { console.log(results); });
          localStorage.removeItem('unSendHouseData')
         //this.http.post(this.apiUrl+'/house', house, this.options)
      } 
    
      return this.http.post(this.apiUrl+'/house', house, this.options);
    
  }
  else{
    let unsavedData:UnsavedHouseData=JSON.parse(localStorage.getItem('unSendHouseData'));
    if(!unsavedData)
      unsavedData=new UnsavedHouseData();
    unsavedData.Houses.push(house);
    localStorage.setItem('unSendHouseData',JSON.stringify(unsavedData));
  }
}
 

registerMember(member: Population){
  if(window.navigator.onLine){
    let memberSavedData:UnsavedPopulationData=JSON.parse(localStorage.getItem('unSendPopulationData'));
   
    if(memberSavedData){
      var tasks$ = [];
      for(let i=0;i<memberSavedData.PopulationData.length;i++){
        let localData=memberSavedData.PopulationData[i];
        tasks$.push(this.http.post(this.apiUrl+'/sendmember', localData, this.options));
      }
      forkJoin(...tasks$).subscribe(results => { console.log(results); });
      localStorage.removeItem('unSendPopulationData');
     // return this.http.post(this.apiUrl+'/sendmember', member);
    }
  
      return this.http.post(this.apiUrl+'/sendmember', member);     
    
  }
    else{
      let unsavedData:UnsavedPopulationData=JSON.parse(localStorage.getItem('unSendPopulationData'));
      if(!unsavedData)
        unsavedData=new UnsavedPopulationData();
      unsavedData.PopulationData.push(member);
      localStorage.setItem('unSendPopulationData',JSON.stringify(unsavedData));
    }
  }
}
