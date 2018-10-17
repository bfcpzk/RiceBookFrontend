import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";


export class Follower{
  netId: string;
  name: string;
  avatar: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class FollowingService {


  constructor(private http: HttpClient) { }

  initFollowerList(): Observable<any>{
    return this.http.get('../../../assets/followers.json');
  }

  addFollower(addNetId: string, followers: Follower[], curNetId: string): any{
    if(!this.checkHasAdded(addNetId, followers)){
      const users = JSON.parse(localStorage['users'])
      let hasAddingUser = false;
      let i = 0;
      for(; i < users.length ; i++){
        if(users[i].netId == addNetId && curNetId != addNetId){
          hasAddingUser = true;
          break;
        }
      }
      if(hasAddingUser){
        let f = new Follower();
        f.netId = users[i].netId;
        f.name = addNetId;
        f.avatar = users[i].profile;
        f.status = users[i].headline;
        return f;
      }else{
        return null;
      }
    }else return null;
  }

  checkHasAdded(netId: string, followers: Follower[]){
    for(let i = 0 ; i < followers.length ; i++){
      if(followers[i].netId == netId) {
        return true;
      }
    }
    return false;
  }
}
