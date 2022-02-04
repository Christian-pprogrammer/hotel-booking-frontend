import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  form = this.fb.group({
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required]),
    telephone: this.fb.control('', [Validators.required]),
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required])
  });
  get firstName() {
    return this.form.get('firstName')
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get email() {
    return this.form.get('email');
  }
  get telephone() {
    return this.form.get('telephone');
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  ngOnInit(): void {
  }
  submit() {
    this.authService.signup(this.form.value)
      .subscribe(user=>{
        console.log(user);
      }, (err)=>{
        alert(err.message);
      })
  }

}
