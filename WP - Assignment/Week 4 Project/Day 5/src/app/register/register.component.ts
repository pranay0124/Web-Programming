import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { CredentialsService } from '../credentials.service';
import { Router } from '@angular/router';
import { pwdvalidator } from './cnfrmpwdvalidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // for forms
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private service: CredentialsService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cnfrmpwd: ['', [Validators.required, Validators.minLength(6), pwdvalidator]],
      address: ['']
    });
    // this.registerForm.controls.password.valueChanges.subscribe(
    //   x => this.registerForm.controls.cnfrmpwd.updateValueAndValidity());
  }

  get f() { return this.registerForm.controls; }

  onSubmit(firstname,number,email,password,address) {
    var first = (document.getElementById("firstname") as HTMLInputElement).value;
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.service.addUser(firstname,number,email,password,address).subscribe(( ) => {
      alert('registered');
      this.router.navigate(['/Login']);
    });
  }
}
