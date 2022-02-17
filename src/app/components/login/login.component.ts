import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from '../../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private Shared:SharedService) { }
  // onSubmit(data:any){
  //   this.http.post("http://localhost:3000/api/item/login",data).subscribe((res)=>{
  //     console.warn(res)
  //   })
  //   console.warn(data)
  //   }
  onpost(data:any){
    this.Shared.onSubmit(data)
  }
  ngOnInit(): void {
  }
  
}
