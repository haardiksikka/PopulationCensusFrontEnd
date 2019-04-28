import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../../communication.service'
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-declined',
  templateUrl: './declined.component.html',
  styleUrls: ['./declined.component.css']
})
export class DeclinedComponent implements OnInit {
result : any;
declined= Array();
  constructor(private dataService: CommunicationService, private userService: UserService) { }

  ngOnInit() {
    // this.dataService.subscribe('declinedChild', (data)  => {
    //   //your code
    //   this.result=data;
    //   console.log(this.result.payload)
    //   for(let i=0;i<this.result.payload.length;i++ ){
    //     this.declined.push(this.result.payload[i])
    //   }
    //   console.log(this.declined);
    //  // console.log(data);
    // });
    this.userService.getVolunteer().subscribe((data)=>{
      this.result=data;
      
      this.declined= [];
      
    //  console.log(this.result[0].VolunteerStatus)
      for(let i=0;i<this.result.length;i++){
       
        if(this.result[i].VolunteerStatus==='Declined'){
          this.declined.push(this.result[i])
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
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
