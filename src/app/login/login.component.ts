import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from '../authentication-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../alert.service'
import { first } from 'rxjs/operators';
import { bypassSanitizationTrustHtml } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  
  returnUrl: string;
  result :any
  token
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationServiceService,
    
    ) 
    {}

ngOnInit() {
    this.loginForm = this.formBuilder.group({
        Email: ['', [Validators.required,Validators.email]],
        Password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z0-9])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z0-9\\d@$!%*#?&]{8,}$')]],
    });
   // this.authenticationService.logout();
   if(localStorage.getItem('currentUser')){
      this.loggedIn();
   }
}

loggedIn(){
    const token=JSON.parse(localStorage.getItem('currentUser'));
    if(token.Role==="Approver"){
      //localStorage.setItem('currentUser', this.result);

      //console.log(localStorage.getItem('currentUser'))

    this.router.navigate(['approver']);
    }
    else if(token.Role==="Volunteer" && token.Status==="Accepted"){
     // localStorage.setItem('currentUser',JSON.stringify(this.result));
      
      //  console.log(localStorage.getItem('currentUser'))
      //  console.log(JSON.parse(localStorage.getItem('currentUser')))
      this.router.navigate(['dashboard'])
    }
    else if(token.Role==="Volunteer" && token.Status==="Pending"){
      //localStorage.setItem('currentUser', this.result);
      this.router.navigate(['requestpending']);
    }
    else{
      //localStorage.setItem('currentUser', this.result);
      this.router.navigate(['requestdeclined']);
    }

}
get f() { return this.loginForm.controls; }
getevent(data){
  console.log(data);
}
onSubmit() {
 
  console.log(this.loginForm.value)
  // stop here if form is invalid
  if (this.loginForm.invalid) {
    alert('Enter valid email and password')
      return;
  }

  
  this.authenticationService.login(this.loginForm.value.Email, this.loginForm.value.Password)
    
      .subscribe(
          (data) => {
            console.log(data)
            if(data){
              this.result=data;
              //this.router.navigate([this.returnUrl]);
              console.log(this.result)
              
              if(this.result.Role==="Approver"){
                localStorage.setItem('currentUser', JSON.stringify(this.result));

                console.log(localStorage.getItem('currentUser'))

              this.router.navigate(['approver']);
              }
              else if(this.result.Role==="Volunteer" && this.result.Status==="Accepted"){
                localStorage.setItem('currentUser',JSON.stringify(this.result));
                
                  console.log(localStorage.getItem('currentUser'))
                  console.log(JSON.parse(localStorage.getItem('currentUser')))
                this.router.navigate(['dashboard'])
              }
              else if(this.result.Role==="Volunteer" && this.result.Status==="Pending"){
                localStorage.setItem('currentUser',JSON.stringify(this.result));
                this.router.navigate(['requestpending']);
              }
              else{
                localStorage.setItem('currentUser', JSON.stringify(this.result));
                this.router.navigate(['requestdeclined']);
              }
              
            }
            else{
                alert('invalid username or password');
            }
          },
          error => {
              
              alert("UserName or Password is Wrong,Please Try Again!")
             
          });
}
}

