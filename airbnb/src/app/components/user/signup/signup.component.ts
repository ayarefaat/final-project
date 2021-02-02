import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from '../../models/ApiResponse';
import{User} from '../../models/user'
import { UserService } from './../../../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form:FormGroup;
  // user:User;
  image:File=null;
  url:any;
  constructor(private _formBuilder:FormBuilder , private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      FirstName:['',[Validators.required]],
      LastName:['',[Validators.required]],
      Age:['',[Validators.required]],
      Mobile:['',[Validators.required]],
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]],
      Gender:['',[Validators.required]],
      userImage:[null]
    })
  }

selectImage(ev){
  this.image=<File>ev.target.files[0]
  console.log(this.image)
}

uploadImage(){
  let formData = new FormData();
  console.log(formData)
  formData.append('userImage', this.image);
  // var options = { content: formData };
  console.log(this.image,formData)
  this._userService.uploadImage(formData).subscribe((res:ApiResponse)=>{
    console.log("error")
    console.log(res as ApiResponse)
  })
  // console.log(formData)
}

addUser(){
  let user:User=new User();
  user=this.form.value;
  // user.userImage=formData;
  // console.log(formData)

  let newUser=JSON.stringify(user)
  console.log("user" + user)
  console.log(newUser)
 this._userService.create(newUser).subscribe(res=>{
   console.log(res)
   if((res as ApiResponse).success===true){
     this._router.navigateByUrl('/user/login')
     console.log(newUser)
   }else{
     alert('error')
   }
 })
 }
  
}
