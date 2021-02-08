import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostService } from 'src/app/services/host.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Host } from '../../models/host';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

hosts:Host[]=[];
image:null;
isVisible:boolean;
url:any;
ID:number
// hostImage:null
// change(){
 
// }

  constructor(private _hostService:HostService, private _router:Router, private  _formBuilder:FormBuilder) { }
form:FormGroup
  ngOnInit(): void {

    this.form=this._formBuilder.group({
      hostImage:['']
    })
    this._hostService.getHost().subscribe(res=>{
      console.log((res as ApiResponse).data);
     let currentHost = (res as ApiResponse).data;
     console.log(currentHost)
     this.hosts.push(currentHost);
     console.log("Array" ,this.hosts[0]);
    //  this.ID=this.hosts[0][1].hostID
     
    });
   
  }
deleteHost(index:number){
  let host=this.hosts[0][index]
  console.log(host)
  this._hostService.deleteHost(host.hostID).subscribe(res=>{
    console.log((res as ApiResponse))
    this.hosts.splice(index,1);
    // this.hosts.filter(item=> item!==host)
    console.log(this.hosts)
  })
}
selectImage(event:any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    const file=event.target.files[0];
    // this.form.get('userImage').setValue(file);
    this.image=file
    reader.readAsDataURL(event.target.files[0]);
    console.log(file)
    reader.onload = (event: ProgressEvent) => {
      this.url = (<FileReader>event.target).result;
    }
  }

}
start(id:number){
  const formData=new FormData();
  formData.append('hostImage',this.image);
  this._hostService.uploadImage(id,formData).subscribe(res=>{
    console.log(res);
    // this._router.navigateByUrl('hosting/listing');
    
  })

  
}
changeImage(id:number){

  console.log(id)
//   Object.keys(item).forEach(h => {
//     this.isVisible[h] = false;
//   });
//   this.isVisible[item.id] = true;
// }

  this.isVisible= true
}
}