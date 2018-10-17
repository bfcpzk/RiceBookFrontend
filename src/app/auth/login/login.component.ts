import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../registeration/registeration.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  loginState = '';

  errMsg: string;

  constructor(private fb: FormBuilder,
              private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      netId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.getUser();
  }

  getUser(){
    this.http.get('../../../assets/profile.json').subscribe(data => {
      localStorage['users'] = JSON.stringify(data['users']);
    })
  }

  login(netId: string, passwd: string): void{
    const flag = this.isRegisteredUser(netId, passwd);
    if(flag){
      this.loginState = 'login success';
      this.router.navigate(['main']);
      //location.replace('main');
    }else{
      this.loginState = 'login failure';
      this.errMsg = "invalid user";
    }
  }

  isRegisteredUser(netId: string, passwd: string){
    const userList = JSON.parse(localStorage['users']);
    for(let i = 0; i < userList.length ; i++){
      if(userList[i].netId == netId && userList[i].password == passwd){
        localStorage['loginStatus'] = JSON.stringify(userList[i]);
        return true;
      }
    }
    return false;
  }

  goToRegister() {
    this.router.navigate(['registeration']);
  }

  get netId() { return this.loginForm.get('netId');}

  get password() { return this.loginForm.get('password');}

}
