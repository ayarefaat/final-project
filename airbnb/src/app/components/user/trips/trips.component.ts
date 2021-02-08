import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../../models/ApiResponse';
import { Place } from '../../models/place';
import { PlaceService } from './../../../services/place.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
trips:Place[]=[]
  constructor(private _placeService:PlaceService) { }

  ngOnInit(): void {
    this._placeService.getTrips().subscribe(res=>{
      console.log(((res as ApiResponse).data));
      let foundTrips=(res as ApiResponse).data;
      this.trips.push(foundTrips);
      console.log(this.trips[0])
    })
  }
  deleteTrip(id:number){
    this._placeService.deleteTrip(id).subscribe(res=>{
      console.log((res as ApiResponse).message)
    })
  }  

}
