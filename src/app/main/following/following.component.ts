import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Follower, FollowingService} from "./following.service";
import {User} from "../../auth/registeration/registeration.service";

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  addNetId: string;

  user: User;

  followers: Follower[];

  errMsg: string;

  @Output() sendNetId = new EventEmitter<string>();

  constructor(private followeringService: FollowingService) {}

  ngOnInit() {
    this.followeringService.initFollowerList().subscribe(data => {
      this.followers = data['followers'];
      localStorage['followers'] = JSON.stringify(this.followers);
    });
    if(localStorage['loginStatus'] != null){
      this.user = JSON.parse(localStorage['loginStatus'])
    }else{
      this.user = new User();
    }
  }

  addFollower(){
    const res = this.followeringService.addFollower(this.addNetId, this.followers, this.user.netId);
    if(res != null) {
      this.followers.push(res);
      this.sendNetId.emit(JSON.stringify({'netId':res.netId, 'flag': 1}));
    } else {
      this.errMsg = "invalid adding";
      setTimeout(() => {
        this.errMsg = '';
      }, 2000)
    }
    this.addNetId = '';
  }

  unfollow(netId: string){
    let i = 0;
    for(; i < this.followers.length ; i++){
      if(this.followers[i].netId == netId){
        break;
      }
    }
    this.followers.splice(i, 1);
    this.sendNetId.emit(JSON.stringify({'netId': netId, 'flag': 0}));
  }
}
