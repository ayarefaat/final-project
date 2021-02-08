import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../../models/ApiResponse';
import { Host } from '../../models/host';
import { HostService } from './../../../services/host.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
places:Host[]=[];
approvedHosts=[]
  constructor(private _hostService:HostService) { }

  ngOnInit(): void {
    this._hostService.getAllHosts().subscribe(res=>{
      console.log((res as ApiResponse).data)
      let foundHosts = (res as ApiResponse).data
      console.log(foundHosts.length)
      for(let i=0;i<foundHosts.length;i++){
        console.log(foundHosts[i].hostName)
        this.places.push(foundHosts[i])
      }
      console.log(this.places);
      for(let i=0;i<this.places.length;i++){
        console.log(this.places[i].hostStatus)
        if(this.places[i].hostStatus==="Approve"){
          this.approvedHosts.push(this.places[i])
        }
      };
      console.log(this.approvedHosts)
    })
  }

}
