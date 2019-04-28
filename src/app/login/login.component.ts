import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from '../authentication-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../alert.service'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  submitted = false;
  returnUrl: string;
  result :any
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationServiceService,
    private alertService : AlertService
    ) 
    {}

ngOnInit() {
    this.loginForm = this.formBuilder.group({
        Email: ['', [Validators.required,Validators.email]],
        Password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$')]],
    });
   // this.authenticationService.logout();
}

get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
    alert('Enter valid email and password')
      return;
  }

  
  this.authenticationService.login(this.f.Email.value, this.f.password.value)
    
      .subscribe(
          data => {
            if(data){
              this.result=data;
              //this.router.navigate([this.returnUrl]);
              console.log(this.result)
              if(this.result.Role==="Approver"){
                localStorage.setItem('currentUser', this.result);

                console.log(localStorage.getItem('currentUser'))

              this.router.navigate(['approver']);
              }
              else if(this.result.Role==="Volunteer" && this.result.Status==='Accepted'){
                localStorage.setItem('currentUser', this.result);
                this.router.navigate(['dashboard'])
              }
              else if(this.result.Role==="Volunteer" && this.result.Status==='Pending'){
                this.router.navigate(['requestpending']);
              }
              else{
                this.router.navigate(['requestdeclined']);
              }
              
            }
          },
          error => {
              
              alert("UserName or Password is Wrong,Please Try Again!")
             
          });
}
}

