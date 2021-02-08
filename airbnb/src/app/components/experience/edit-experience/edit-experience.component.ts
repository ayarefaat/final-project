import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  form:FormGroup;
  experienceId:number;
  experience:Experience=new Experience();

  constructor(private _experienceService:ExperienceService,private _router:Router,private _formBuilder:FormBuilder,private _activatedRoute:ActivatedRoute){ }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.experienceId=+params.get('id');
      this._experienceService.getExperienceById( this.experienceId).subscribe((res)=>{
        console.log(res);
        // we saved res from database in experince array
        this.experience= (res as ApiResponse).data;
        this.form=this._formBuilder.group({
          place:[this.experience.place,[Validators.required]],
          typeOfExperience:[this.experience.typeOfExperience,[Validators.required]],
          description:[this.experience.description,[Validators.required]],
         
        })
      })

        
      })
  }
  editExperience()
  {
    let updatedExperience:Experience=new Experience();
    updatedExperience= this.form.value;
    updatedExperience.experienceID=this.experience.experienceID;
    this._experienceService.editUserExperience(updatedExperience).subscribe(res=>{
        console.log((res as ApiResponse).data);
        if((res as ApiResponse).success==true)
        {
          this._router.navigateByUrl("/experience/myExperience");
        }

      }
    )

  }

 
}
