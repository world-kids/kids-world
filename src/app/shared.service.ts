import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http:HttpClient,private router: Router) { }
  onSubmit(data:any){
    this.http.post("http://localhost:3000/api/item/login",data).subscribe((res)=>{
      console.warn(res) 
      localStorage.setItem('loggined','true')
      this.router.navigate(['home']);
    })
    console.warn(data)
    }

    logout(){
      localStorage.removeItem('loggined')
    }
   getStories(){
    return this.http.get("http://localhost:3000/api/item/story")
    }
   }

