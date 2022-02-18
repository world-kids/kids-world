import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';;
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
text:any
stories:any
  constructor(private Shared:SharedService) {
    this.Shared.getStories().subscribe((data)=>{
     console.warn(data)
    this.stories=data})
   }
showText(text:any){
  this.text=text
}

  ngOnInit(): void {
  }
}
