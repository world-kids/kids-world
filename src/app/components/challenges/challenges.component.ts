import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

      page=0
      count=4
      ball=true
      plane=true
      fish=true
      tweet=true
      bee=true
    
     
 

    dec(){
      if(this.count>0 ){
        this.count-=1
      }
    }
    changeview(){
      if(this.ball){
        this.ball=!this.ball
        console.log(this.ball)
      }
    }
    changeviewplane(){
      if(this.plane){
        this.plane=!this.plane
        console.log(this.plane)
      }
    
  }
  changeviewbee(){
      if(this.bee){
        this.bee=!this.bee
        console.log(this.bee)
      }
    
  }
  changeviewtweet(){
      if(this.tweet){
        this.tweet=!this.tweet
        console.log(this.tweet)
      }
    
  }
  changeviewfish(){
      if(this.fish){
        this.fish=!this.fish
        console.log(this.fish)
      }
    
  }
  changepage(){
    if(this.count==0)
    this.page++
  }
  previouspage(){
    this.page--
  }
  show(){
    this.page++
  }
  
}

