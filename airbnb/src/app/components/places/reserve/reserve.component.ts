import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../models/place';
import { PlaceService } from './../../../services/place.service';
import { ApiResponse } from './../../models/ApiResponse';
import { HostService } from 'src/app/services/host.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
form:FormGroup;
hostID:number;
hostEmail:string;
tripPrice:string;
tripLocation:string;
tripNights:string;
tripNumber:number; // to check reserved or not
  constructor(private _formBuilder:FormBuilder, private _placeService:PlaceService, private _activatedRoute:ActivatedRoute,private _hostService:HostService) { }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.hostID=+params.get('id')
      this._hostService.getHostById(this.hostID).subscribe((response:ApiResponse)=>{
       console.log((response as ApiResponse).data)
       let Host=(response as ApiResponse).data;
       this.hostEmail=Host.hostEmail;
       this.tripPrice=Host.totalPrice;
       this.tripLocation=Host.address;
       this.tripNights=Host.numberOfNights;
       this.tripNumber=Host.hostID
       console.log(Host.hostID)
       console.log(this.tripNights,this.tripPrice,this.tripLocation,this.hostEmail,this.tripNumber)
       
      })
    });
    this.form=this._formBuilder.group({
     country:['',[Validators.required]],
      city:['',[Validators.required]],
      street:['',[Validators.required]],
      apartmentNumber:['',[Validators.required]],
    })
  }
confirm(){
  let place:Place=new Place()
  place=this.form.value;
  place.tripHostEmail=this.hostEmail;
  place.tripLocation=this.tripLocation;
  place.tripNights=this.tripNights;
  place.tripPrice=this.tripPrice;
  place.tripNumber=this.tripNumber
  console.log(place);
  this._placeService.postAddress(place).subscribe((res:ApiResponse)=>{
    console.log(res as ApiResponse)
  })

}  

}
