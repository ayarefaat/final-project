import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // cities section
cities=[
  {img:"/assets/images/2.webp",h5:"Hurghada",p:"5.5 hour drive"},
  {img:"/assets/images/3.jpg",h5:"Marina",p:"2 hour drive"},
  {img:"/assets/images/4.jpg",h5:"Sharm el-shekih",p:"7 hour drive"},
  {img:"/assets/images/5.jpg",h5:"Matrouh",p:"6 hour drive"},
  {img:"/assets/images/6.jpg",h5:"Alex",p:"2.5 hour drive"},
  {img:"/assets/images/7.jpg",h5:"Hurghada",p:"5.5 hour drive"},
];
//section live
places=[
  {img:"/assets/images/11.jpg",desc:"Entire homes",router:"/user/login"},
  {img:"/assets/images/12.jpg",desc:"Cabines and cottage",router:"/user/login"},
  {img:"/assets/images/13.jpg",desc:"unique stays",router:"/user/login"},
];
//section explore
explore=[
  {img:"/assets/images/15.jpg",title:"Online Expreience",desc:"Travel the world without leaving home."},
  {img:"/assets/images/16.jpg",title:"Experiences",desc:"Things to do wherever you are."},
  {img:"/assets/images/17.jpg",title:"Adventures",desc:"Multi-day trips with meals and stays."},
];
//section host
host=[
  {img:"/assets/images/18.jpg",desc:"Host you home",router:"/hosting"},
  {img:"/assets/images/19.jpg",desc:"Host an Experience",router:"/experience"},
  {img:"/assets/images/20.jpg",desc:"Host an adventure"},
]
  constructor() { }
 

  ngOnInit(): void {
  }

}
