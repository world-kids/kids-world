import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery'
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
   
    $("#password").focusin(function () {
      $("form").addClass("up");
    });
    $("#password").focusout(function () {
      $("form").removeClass("up");
    });
    
    // Panda Eye move
    $(document).on("mousemove", function (event) {
      var dw = $(document).width() !/ 15 
      var dh = $(document).height()  !/  15
      var x = event.pageX / dw
      var y = event.pageY / dh
      $(".eye-ball").css({
        width: x,
        height: y
      });
    });
    
    // validation
    
    $(".btn").click(function () {
      $("form").addClass("wrong-entry")
      setTimeout(function () {
        $("form").removeClass("wrong-entry")
      }, 3000);
    })
  }
}