import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private _apiService:ApiService) { 
  }

  addExp(exp:any)
  {
    return this._apiService.postWithToken("experiences",exp)

  }

  getuserExp()
  {
    return this._apiService.get("experiences/userExp")
  }

  editUserExperience(experience:any)
  {
    return this._apiService.put(`experiences/${experience.experienceID}`,experience)
  }

  getExperienceById(id:number)
  {
    return this._apiService.get(`experiences/${id}`)
  }
  deleteExperience(id:number)
  {
    return this._apiService.delete(`experiences/${id}`)
  }

  uploadImage(id:number,image:any){
    return this._apiService.put(`experiences/photo/${id}`,image)
  }
}
