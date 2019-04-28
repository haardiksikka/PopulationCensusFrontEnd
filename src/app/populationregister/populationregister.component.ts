import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {VolunteerService} from '../volunteer.service';  
import {Router} from '@angular/router';
@Component({
  selector: 'app-populationregister',
  templateUrl: './populationregister.component.html',
  styleUrls: ['./populationregister.component.css']
})
export class PopulationregisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private volunteerService: VolunteerService,
    private router: Router) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        NameOfPerson: ['', Validators.required],
        RelationshipToHead: ['', Validators.required],
        Age: ['', Validators.required],
        AgeAtMarriage: ['', [Validators.required]],
        MaritalStatus:['',[Validators.required]],
        Gender:['',[Validators.required]],
        OccupationStatus:['',[Validators.required]],
        Income:['',[Validators.required]],
        DateOfBirth:['',[Validators.required]],
        OccupationIndustry:['',[Validators.required]],
        CensusHouseNumber:['',[Validators.required]],
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
  this.volunteerService.registerMember(this.registerForm.value)
      .subscribe(
          data => {
            if(data===true){
              this.router.navigate(['/dashboard']);
              alert('Member Registration Successfull')
            }
             else{
               alert('house is not registered');
             } 
          },
          error => {
              alert("house is not registered");
             // this.loading = false;
          });
}

}
