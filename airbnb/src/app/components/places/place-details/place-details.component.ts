import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostService } from 'src/app/services/host.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Host } from '../../models/host';
import { UserService } from './../../../services/user.service';
import { PlaceService } from './../../../services/place.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
hostID:number;
host:Host[]=[]
activity=[];
profileName:string;
hostName:string;
isDisabled:boolean=false;
isVisible:boolean=false;
myTrips=[]
disabled(){
  if(this.profileName===this.hostName){
    this.isDisabled=true;
  }
}

  constructor(private _activatedRoute:ActivatedRoute, private _hostService:HostService, private _userService:UserService,private _placeService:PlaceService) { }

  
  ngOnInit(): void {
    this._userService.getProfile().subscribe(res=>{
      console.log((res as ApiResponse).data);
      let foundUser=(res as ApiResponse).data;
      console.log(foundUser.firstName);
      this.profileName=foundUser.firstName;
      console.log(this.profileName)
    })
    this._activatedRoute.paramMap.subscribe(params=>{
      this.hostID=+params.get('id')
      this._hostService.getHostById(this.hostID).subscribe((response:ApiResponse)=>{
       console.log((response as ApiResponse).data)
       let foundHost=(response as ApiResponse).data;
       console.log(foundHost.hostName);
       this.hostName=foundHost.hostName;
       this.disabled();
       this.host.push(foundHost)
       console.log(this.host[0].activities)
       for(let i=0;i<this.host[0].activities.length;i++){
         this.activity.push(this.host[0].activities[i])
       };
       console.log(this.activity)
      })

    });
    this._placeService.getTrips().subscribe(res=>{
      // console.log(((res as ApiResponse).data))
      let foundTrips=(res as ApiResponse).data
      this.myTrips.push(foundTrips);
      for(let i=0;i<this.myTrips[0].length;i++){
        if(this.myTrips[0][i].tripNumber===this.hostID){
          this.isVisible=true;
          this.isDisabled=true
        }
      }
    })
    
 
   
  }

}
