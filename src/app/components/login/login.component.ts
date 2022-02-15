import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }
  onSubmit(data:any){
    this.http.post("http://localhost:3000/api/item/login",data).subscribe((res)=>{
      console.warn(res)
    })
    console.warn(data)
    }
  ngOnInit(): void {
  }

}
