import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditprofileComponent } from '../editprofile/editprofile.component';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  getdata: any = []
  UserRecorddetail: any
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {

    this.displayinfo()
  }
  openDialog() {
    const dialogRef = this.dialog.open(EditprofileComponent);

  }

  displayinfo() {
    this.getdata = sessionStorage.getItem('userdetail')
    this.UserRecorddetail = JSON.parse(this.getdata)

  }

}


