import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import {CommunicationService} from '../communication.service';

@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.css']
})
export class ApproverComponent implements OnInit {

  constructor(private userService: UserService, private messageService: CommunicationService) { }
result : any;
pending = new Array()
accepted =new Array()
declined =new Array()
  ngOnInit() {
    this.userService.getVolunteer().subscribe((data)=>{
      this.result=data;
      this.pending=[];
      this.accepted= [];
      this.declined=[];
    //  console.log(this.result[0].VolunteerStatus)
      for(let i=0;i<this.result.length;i++){
        if(this.result[i].VolunteerStatus==='Pending'){
            this.pending.push(this.result[i])
        }
        else if(this.result[i].VolunteerStatus==='Accepted'){
          this.accepted.push(this.result[i])
        }
        else{
          this.declined.push(this.result[i]);
        }
      }
      
        this.messageService.postMessage('pendingChild',this.pending);
        this.messageService.postMessage('acceptedChild',this.accepted);
        this.messageService.postMessage('declinedChild',this.declined);
      console.log("exit");
    //   console.log(this.result);
    //  console.log(this.accepted)
    //  console.log(this.pending);
    },
    error=>{
        console.log("something went wrong");
    })

    }
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
    }
}


