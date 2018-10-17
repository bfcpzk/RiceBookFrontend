import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HeadlineService} from "./headline.service";
import {User} from "../../auth/registeration/registeration.service";

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  constructor(private router: Router,
              private headlineService: HeadlineService) { }

  newStatus : string;

  user: User;

  ngOnInit() {
    if(localStorage['loginStatus'] != null){
      this.user = JSON.parse(localStorage['loginStatus']);
    }else{
      this.user = new User();
    }
  }

  updateHeadline(){
    this.user.headline = this.headlineService.updateHeadline(this.newStatus, this.user.headline);
    this.newStatus = '';
  }

  logout(){
    localStorage.removeItem('loginStatus');
    this.router.navigate(['login']);
    //location.replace('login');
  }

  toProfile(){
    this.router.navigate(['profile']);
  }
}
