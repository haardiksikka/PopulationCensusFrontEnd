import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {VolunteerService} from '../volunteer.service';  
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private volunteerService: VolunteerService,
    private router: Router) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
          HouseNumber: ['', Validators.required],
          Street: ['', Validators.required],
          City: ['', Validators.required],
          State: ['', [Validators.required]],
          Pincode:['',[Validators.required]],
          NameOfHead:['',[Validators.required]],
          NumberOfRooms:['',[Validators.required]],
          OwnershipStatus:['',[Validators.required]],
      });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    console.log(this.registerForm.value)
   // this.loading = true;
    this.volunteerService.registerHouse(this.registerForm.value)
        .subscribe(
            data => {
            
                this.router.navigate(['/dashboard']);
                alert("House Registered Successfully!")
            },
            error => {
                console.log("Some Error Occured");
               // this.loading = false;
            });
}


}
