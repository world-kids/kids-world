import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeView=true
count=0
index = 0
photo=""

questions= [
  {
    suggestions: [
      {
        suggestion:
          "https://media.discordapp.net/attachments/941079224666697738/941816440175071262/orange-8_4507176.jpg?width=768&height=432",
      },
      {
        suggestion:
          "https://media.discordapp.net/attachments/941079224666697738/941816440422539264/download.png",
        correct: true,
      },
      {
        suggestion:
          "https://media.discordapp.net/attachments/941079224666697738/941817049712320523/download_1.png",
      },
      {
        suggestion:
          "https://media.discordapp.net/attachments/941079224666697738/941817255531012156/640px-A_black_image.jpg?width=576&height=432",
      },
    ],
  },
  {
    suggestions: [
      {
        suggestion:
          "https://media.discordapp.net/attachments/941079224666697738/941817613456130048/2560px-Purple.svg.png?width=648&height=432",
      },
      {
        suggestion:
          "https://media.discordapp.net/attachments/941079224666697738/941816440175071262/orange-8_4507176.jpg?width=768&height=432",
        correct: true,
      },
      {
        suggestion:
          "https://media.discordapp.net/attachments/941079224666697738/941817613854580786/Solid_pink.svg.png?width=432&height=432",
      },
      {
        suggestion:
          "https://media.discordapp.net/attachments/941079224666697738/941817996333154314/768px-Solid_blue.svg.png?width=432&height=432",
      },
    ],
  },
  
]


  score(i:any){
    
    
    if(i.correct===true){
      this.count++
    }
    this.index++
console.log(this.count);
if(this.index===2){
  this.changeView=false
}
  }
  test() {
    if (this.count === 0) {
      this.photo ="https://images-ext-2.discordapp.net/external/KKhnER3qr6BJASM64Q5R1mWDuDA3dhL2Keo8cCiaxJY/https/cdn3d.iconscout.com/3d/premium/thumb/zero-number-4863645-4056291.png?width=432&height=432";
    }
    if (this.count === 1) {
      this.photo ="https://images-ext-2.discordapp.net/external/6gjcxtvNyvEzUE_q3GkZL6JJG2uvcID3O5HYR0HNeTI/https/cdn3d.iconscout.com/3d/premium/thumb/1-number-4863653-4056299.png?width=432&height=432";
    }
    if (this.count === 2) {
      this.photo ="https://images-ext-2.discordapp.net/external/ARbyf1ozzv81gNLPyZpjCif2h9CEQKW5IFItT4jxywI/https/cdn3d.iconscout.com/3d/premium/thumb/two-number-4863651-4056297.png?width=433&height=433";
    }
    // if (this.count === 3) {
    //   this.photo ="https://images-ext-2.discordapp.net/external/bqlYwU1oGL3swILLp2qBksk2Bj7Te2UmswRzMh_4Iog/https/cdn3d.iconscout.com/3d/premium/thumb/three-number-4863643-4056289.png?width=433&height=433"
    // }
  }
 

}
