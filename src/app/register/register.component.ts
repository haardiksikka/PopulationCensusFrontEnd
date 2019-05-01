import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  fileUpload: File = null
  myRecaptcha: boolean= false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    
    
) {  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        Password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')]],
        ImageName:['',[Validators.required]],
        AdhaarNumber:['',[Validators.required,Validators.pattern('^[0-9]{12,12}$')]],
        recaptchaReactive:['',Validators.required]
    });
}
get f() { return this.registerForm.controls; }
fileupload(file:FileList){

  this.fileUpload=file.item(0);

}
onScriptLoad() {
  console.log('Google reCAPTCHA loaded and is ready for use!')
}

onScriptError() {
  console.log('Something went long when loading the Google reCAPTCHA')
}
 
onSubmit() {

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert('Enter valid details')
        return;
    }
    this.registerForm.value.ImageName=this.fileUpload
    console.log(this.registerForm.value)
   // this.loading = true;
    this.userService.register(this.registerForm.value)
        .subscribe(
            data => {
                
                this.router.navigate(['/login']);
            console.log('success');
            },
            error => {
                alert('Some error occured,Try again!');
            });
}

}
