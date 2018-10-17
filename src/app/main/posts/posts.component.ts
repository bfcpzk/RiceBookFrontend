import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Feed, PostsService} from "./posts.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {CommentsComponent} from "./comments/comments.component";
import {HttpClient} from "@angular/common/http";

const album_data = ["https://www.rice.edu/_images/feature-rice-facts.jpg",
  "https://www.rice.edu/_images/feature-why-rice.jpg",
  "https://www.rice.edu/_images/uploads/2015/baker-college-746x496.jpg",
  "https://www.rice.edu/_images/uploads/2015/martel-around-at-night-746x496.jpg"];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  textContent = '';

  imgUrl: string;

  feedList: Feed[];

  searchCondition = '';

  searchRes: Feed[];

  netId: string;

  album = "https://www.rice.edu/_images/uploads/2015/martel-around-at-night-746x496.jpg";

  index = 0;

  @Input()
  set getNetIdFromParent(getNetIdFromParent: string){
    //alert(getNetIdFromParent);
    if(getNetIdFromParent != null && getNetIdFromParent != ''){
      const obj = JSON.parse(getNetIdFromParent);
      if(obj.flag == 1){
        this.searchRes = this.postsService.addNewFollowersPosts(obj.netId, this.feedList);
      }else{
        this.feedList = this.postsService.removeFollowersPosts(obj.netId, this.feedList);
        this.searchRes = this.feedList;
      }
    }
  }

  /*modalRef: BsModalRef;*/

  constructor(private postsService: PostsService,
              private modalService: BsModalService,
              private http: HttpClient) {
  }

  ngOnInit() {

    this.http.get('../../assets/articles.json').subscribe(data => {
      localStorage['articles'] = JSON.stringify(data['articles']);
      let user = JSON.parse(localStorage['loginStatus']);
      this.netId = user.netId;
      this.feedList = this.getFeedList(this.netId);
      this.searchRes = this.feedList;
    });

    this.imgUrl = 'assets/white.jpg';
    this.searchRes = [];

    setInterval(() => {
      this.index = (this.index + 1) % album_data.length;
      this.album = album_data[this.index];
    }, 2500);
  }

  getFeedList(netId: string){
    return this.postsService.getFeedList(netId);
  }

  reset(){
    this.textContent = '';
  }

  postFeed(){
    if(this.textContent !== ''){
      this.postsService.postFeed(this.feedList, this.imgUrl, this.textContent);
      this.textContent = '';
    }
  }

  searchPost(){
    if(this.searchCondition != ''){
      this.searchRes = this.postsService.searchPost(this.feedList, this.searchCondition);
      this.searchCondition = '';
    }else{
      this.searchRes = this.feedList;
    }
  }

  modalRef: BsModalRef;
  showComments(index: number){
    this.modalRef = this.modalService.show(CommentsComponent, {
      initialState:{
        title: 'Comment List',
        feed: this.feedList[index]
      }
    });
  }

}
