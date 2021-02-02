import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from './../../../services/user.service';
import { ApiResponse } from './../../models/ApiResponse';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:User[]=[]
url:any
isVisible:boolean=false
  constructor(private _userService:UserService ) { }

  ngOnInit(): void {
    this._userService.getProfile().subscribe(res=>{
      console.log((res as ApiResponse).data)
      let currentUser=(res as ApiResponse).data
      this.user.push(currentUser)
      console.log(this.user[0].firstName)
    })
  }

  upload(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
    this.isVisible=true
  }
}
