import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterationService, User} from './registeration.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb : FormBuilder,
              private registerationService: RegisterationService,
              private router: Router) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      accountName: ['', [Validators.required, Validators.minLength(4), this.registerationService.checkAccount]],
      displayName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, this.registerationService.checkPhone]],
      dat: ['2000-04-23', [this.registerationService.checkAge]],
      zipcode: ['77005', [Validators.required, this.registerationService.checkZipcode]],
      password: this.fb.group({
        pass1: ['',[Validators.minLength(6)]],
        pass2: ['']
      }, {validator: this.registerationService.checkPassword})
    });
  }

  goBackToLogin(): void{
    this.router.navigate(['login']);
  }

  get accountName() { return this.registerForm.get('accountName'); }

  get displayName() { return this.registerForm.get('displayName');}

  get email() { return this.registerForm.get('email'); }

  get phone() { return this.registerForm.get('phone'); }

  get dat() { return this.registerForm.get('dat'); }

  get zipcode() { return this.registerForm.get('zipcode'); }

  get pass1() {return this.registerForm.get('password').get('pass1');}

  get pass2() {return this.registerForm.get('password').get('pass2');}

  toMain(){
    const user = JSON.parse(localStorage['users'])[0];
    localStorage['loginStatus'] = JSON.stringify(user);
    this.router.navigate(['main']);
  }
}
