import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient ) {}
onSubmit(data:any){
this.http.post("http://localhost:3000/api/item/signup",data).subscribe((res)=>{
  console.warn(res)
})
console.warn(data)
}



  ngOnInit(): void {
  }

}
