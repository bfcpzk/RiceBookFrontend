import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../auth/registeration/registeration.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get('../../assets/profile.json');
  }

  onUpdate(updateForm: FormGroup, user: User): void{
    const formRawValue = updateForm.getRawValue();
    if(formRawValue.name != '') {
      user.display_name = formRawValue.name;
    }
    if(formRawValue.email != '') {
      user.email = formRawValue.email;
    }
    if(formRawValue.phone != '') {
      user.phone = formRawValue.phone;
    }
    if(formRawValue.zipcode != '') {
      user.zipcode = formRawValue.zipcode;
    }
    updateForm.reset('');
  }

  checkPhone(control: FormControl): any{
    const phone = control.value;
    if(phone == '') return null;
    const pat = /^\d{3}-\d{3}-\d{4}$/;
    const res = pat.test(phone);
    return res ? null : {phoneChecker: {err : 'Phone number is invalid.'}}
  }

  checkZipcode(control: FormControl): any{
    const zipcode = control.value;
    if(zipcode == '') return null;
    const pat = /^\d{5}$/;
    const res = pat.test(zipcode);
    return res ? null : {zipcodeChecker: {err : 'Zipcode is invalid.'}}
  }
}
