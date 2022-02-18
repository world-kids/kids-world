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
