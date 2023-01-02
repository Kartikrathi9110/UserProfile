import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  userinfo: Array<any> = [];
  Name: any
  Domain: any
  gender: any
  dob: any
  phonenumber: any
  location: any

  ngOnInit(): void {
  }
  constructor() { }

  Submit() {
    var Profile = [{ "Name": this.Name, "Domain": this.Domain, "gender": this.gender, "dob": this.dob, "phonenumber": this.phonenumber, "location": this.location }]
    sessionStorage.setItem('userdetail', JSON.stringify(Profile));
    location.reload()
  }
}
