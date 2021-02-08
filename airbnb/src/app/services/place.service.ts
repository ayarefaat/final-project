import { Injectable } from '@angular/core';
import { Place } from '../components/models/place';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private _apiService:ApiService) { }
  postAddress(place:any){
    return this._apiService.postWithToken('places',place)
  }
  getTrips(){
    return this._apiService.get('places/trips')
  }
  deleteTrip(id:number){
    return this._apiService.delete(`places/${id}`)
  }
  
}
