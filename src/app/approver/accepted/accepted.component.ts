import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../../communication.service'
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.css']
})
export class AcceptedComponent implements OnInit {
  result : any;
  accepted= new Array();
  constructor(private dataService: CommunicationService, private userService: UserService  ) { }

  ngOnInit() {
    // this.dataService.subscribe('acceptedChild', (data)  => {
    //   //your code
    //   this.result=data;
    //   console.log(this.result.payload)
    //   for(let i=0;i<this.result.payload.length;i++ ){
    //     this.accepted.push(this.result.payload[i])
    //   }
    //   console.log(this.accepted);
    // //  console.log(data);
    // }); 
    this.userService.getVolunteer().subscribe((data)=>{
      this.result=data;
      
      this.accepted= [];
      
    //  console.log(this.result[0].VolunteerStatus)
      for(let i=0;i<this.result.length;i++){
       
        if(this.result[i].VolunteerStatus==='Accepted'){
          this.accepted.push(this.result[i])
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
