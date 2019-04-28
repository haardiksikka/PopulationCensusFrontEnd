import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../../communication.service';
import {UserService} from '../../user.service';
import {Router} from '@angular/router'
import { User } from '../../models/Index';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  pending = new Array();
  result : any;
  user =new  User();
 
  constructor(
    private messageService: CommunicationService,
     private userService: UserService,
     private router: Router  ) { }

  ngOnInit() {
    // this.messageService.subscribe('pendingChild',(data)  => {
    //   //your code
    //   this.result=data;
    //   console.log(this.result.payload)
    //   for(let i=0;i<this.result.payload.length;i++ ){
    //     this.pending.push(this.result.payload[i])
    //   }
    //   console.log(this.pending);
    // }); 
    this.userService.getVolunteer().subscribe((data)=>{
      this.result=data;
      
      this.pending= [];
      
    //  console.log(this.result[0].VolunteerStatus)
      for(let i=0;i<this.result.length;i++){
       
        if(this.result[i].VolunteerStatus==='Pending'){
          this.pending.push(this.result[i])
        }

      }
      

      console.log("exit");
    //   console.log(this.result);
    //  console.log(this.accepted)
    //  console.log(this.pending);
    },
    error=>{
        console.log("something went wrong");
    })
  }
  
  acceptVolunteer(email: string): void{
    this.user.Email=email;
    this.userService.acceptVolunteer(this.user)
    .subscribe(
        success => {
          //  this.alertService.success('Registration successful', true);
          alert("Volunteer Status Updated")
            this.router.navigate(['approver']);
        },
        error => {
           // this.alertService.error(error,false);
           alert("failed in updating user, try again!")
           this.router.navigate(['approver']);
          //  this.loading = false;
        });
  }
  rejectVolunteer(email: string): void{
    this.user.Email=email;
    this.userService.rejectVolunteer(this.user)
    .subscribe(
        success => {
          //  this.alertService.success('Registration successful', true);
          alert("Volunteer Status Updated")
            this.router.navigate(['approver']);
        },
        error => {
           // this.alertService.error(error,false);
           alert("failed in updating user, try again!")
           this.router.navigate(['approver']);
          //  this.loading = false;
        });
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
