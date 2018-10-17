import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {

  constructor() { }

  updateHeadline(newStatus: string, headline: string) {
    if(newStatus != ''){
      let preLoginJson = JSON.parse(localStorage['loginStatus']);
      preLoginJson['headline'] = newStatus;
      localStorage['loginStatus'] = JSON.stringify(preLoginJson);
      if(newStatus.length > 16){
        return newStatus.substr(0, 16) + "..";
      }else{
        return newStatus;
      }
    }else return headline;
  }
}
