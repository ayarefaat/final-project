import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostService } from 'src/app/services/host.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Host } from '../../models/host';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
hosts:Host[]=[]
  constructor(private _hostService:HostService, private _router:Router) { }

  ngOnInit(): void {
    this._hostService.getHost().subscribe(res=>{
      console.log((res as ApiResponse).data);
     let currentHost = (res as ApiResponse).data;
     console.log(currentHost)
     this.hosts.push(currentHost);
     console.log("Array" ,this.hosts)
    })
  }
deleteHost(index:number){
  let host=this.hosts[0][index]
  this._hostService.deleteHost(host.hostID).subscribe(res=>{
    console.log((res as ApiResponse))
    this.hosts.splice(index,1)
   
  })
}
}
