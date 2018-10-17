import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class Feed{
  id: number;
  netId: string;
  author: string;
  create_time: string;
  content: string;
  pic: string;
  comments: Comment[];
}

export class Comment{
  cid: number;
  content: string;
  create_time: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  sortFeedListByTime(feedList: Feed[]){
    feedList.sort((a: Feed, b: Feed) => {
      if(a.create_time > b.create_time) return -1;
      else if(a.create_time < b.create_time) return 1;
      else return 0;
    });
  }

  searchPost(feedList: Feed[], searchCondition: string) {
    this.sortFeedListByTime(feedList);
    let tmpArr = [];
    for(let i = 0 ; i < feedList.length ; i++){
      if(feedList[i].content.includes(searchCondition)
        || feedList[i].author.toLowerCase() == searchCondition.toLowerCase()){
        tmpArr.push(feedList[i]);
      }
    }
    return tmpArr;
  }

  getFeedList(netId: string){
    const articles = JSON.parse(localStorage['articles']);
    let arr = [];
    for(let i = 0 ; i < articles.length ; i++){
      if(articles[i].netId == netId)
        arr.push(articles[i]);
    }
    this.sortFeedListByTime(arr);
    return arr;
  }

  postFeed(feedList: Feed[], imgUrl: string, textContent: string){
    let f = new Feed();
    const date = new Date();
    f.pic = imgUrl;
    f.content = textContent;
    f.id = 11;
    const month = (date.getMonth() < 9) ? ("0" + (date.getMonth() + 1)) : ("" + (date.getMonth() + 1));
    const day = (date.getDate() < 10) ? ("0" + (date.getDate() + 1)) : ("" + (date.getDate() + 1))
    f.create_time = date.getFullYear() + "-" + month + "-" + day;
    f.author = JSON.parse(localStorage['loginStatus']).display_name;
    feedList.unshift(f);
  }

  copyFeedList(tmpFeedList: Feed[]){
    let feedList = [];
    for(let i = 0 ; i < tmpFeedList.length ; i++){
      feedList.push(tmpFeedList[i]);
    }
    return feedList;
  }

  addNewFollowersPosts(newNetId: string, tmpFeedList: Feed[]){
    const articles = JSON.parse(localStorage['articles']);
    for(let i = 0; i < articles.length ; i++){
      if(articles[i].netId == newNetId) tmpFeedList.push(articles[i]);
    }
    this.sortFeedListByTime(tmpFeedList);
    return this.copyFeedList(tmpFeedList);
  }

  removeFollowersPosts(newNetId: string, tmpFeedList: Feed[]){
    let tmpArr = []
    for(let i = 0 ; i < tmpFeedList.length ; i++){
      if(tmpFeedList[i].netId != newNetId) {
        tmpArr.push(tmpFeedList[i]);
      }
    }
    this.sortFeedListByTime(tmpArr);
    return tmpArr;
  }

  getValue(): number{
    return 10;
  }
}
