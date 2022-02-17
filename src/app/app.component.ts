import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router,private shared:SharedService){}
  title = 'world-kids';
  login(){
  this.router.navigate(['/login']);
  }
  signup(){
    this.router.navigate(['/signup']);
  }
  logouttt(){
    this.shared.logout()
    this.router.navigate(['/']);
  }
  check(){
    return  !!localStorage.getItem('loggined')
  }
}
