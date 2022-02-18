import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';;
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
stories:any
text:any
sound:any
title:any
  constructor(private Shared:SharedService) {
    this.Shared.getStories().subscribe((data)=>{
     console.warn(data)
    this.stories=data})
   }
showText(story:any){
  this.text=story.text
  this.sound=story.sound
  this.title=story.title
}
playAudio(){
  let audio=new Audio()
  audio.src=this.sound
  audio.load()
  audio.play()
}

  ngOnInit(): void {
  }
}
