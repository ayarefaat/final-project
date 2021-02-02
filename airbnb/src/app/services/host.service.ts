import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private _apiService:ApiService) { }
  addHost(data:any){
    return this._apiService.postWithToken('host/addHost',data)
  }
  getHost(){
    return this._apiService.get('host/addHost/hostUser')
  }
  deleteHost(id:number){
    return this._apiService.delete(`host/addHost/${id}`)
  }
  editHost(host:any){
    return this._apiService.put(`host/addHost/${host.hostID}`,host)
  }
  getHostById(id:number){
    return this._apiService.getId(`host/addHost/${id}`)
  }
}
