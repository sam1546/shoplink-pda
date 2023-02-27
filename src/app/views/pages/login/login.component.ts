import { Component } from '@angular/core';
import { UsermasterService } from '../../../shared/services/usermaster.service';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( private formBuilder: FormBuilder, public router: Router,) { } 
  registerForm: any = FormGroup;
  submitted = false;
  //Add user form actions
  get f() { return this.registerForm.controls; }
  userid = ""; password = "";

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      if (this.userid == 'antech' && this.password == 'antech'){ 
        localStorage.setItem('userid', this.userid);
        this.router.navigate(['/dashboard']);
      }
      else{
        alert('Invalid user id and password')
        return
      }
    }
  }

  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      userid: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  
}
