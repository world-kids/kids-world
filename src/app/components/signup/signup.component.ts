import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) {}
onSubmit(data:any){
this.http.post("http://localhost:3000/api/item/signup",data).subscribe((res)=>{
  console.warn(res)
  this.router.navigate(['/login'])
})
console.warn(data)
}



  ngOnInit(): void {
  }

}
