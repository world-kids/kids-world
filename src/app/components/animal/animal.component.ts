import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

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
          "https://images-ext-1.discordapp.net/external/xsGM5GDhcA4hVpe2eAlk4lhveviNslVhAh4QuRjgaSU/https/cdn3d.iconscout.com/3d/premium/thumb/cat-4065933-3364159%400.png?width=433&height=433",
      },
      {
        suggestion:
          "https://images-ext-1.discordapp.net/external/jwYsaKzPHQoa2TgI2llGqJDe-qOg6rJyQ28IAy3JLcs/https/cdn3d.iconscout.com/3d/premium/thumb/lion-4824495-4025212.png?width=433&height=433",
        correct: true,
      },
      {
        suggestion:
          "https://images-ext-2.discordapp.net/external/9uMN9AoAMc3X3cl_Y3NM87RtVBj5OBXKjxqnOkDgCEI/https/cdn3d.iconscout.com/3d/premium/thumb/dog-4609634-3811488.png?width=433&height=433",
      },
      {
        suggestion:
          "https://images-ext-1.discordapp.net/external/M4TUmIn0TxFxZ1FU1t5URCjxgi_RJSIxD8kulleiOxY/https/cdn3d.iconscout.com/3d/premium/thumb/rabbit-4609622-3811476.png?width=433&height=433",
      },
    ],
  },
  {
    suggestions: [
      {
        suggestion:
          "https://images-ext-2.discordapp.net/external/WFNNdtg65qqYVjUwZUuk0hWFklsnaXCApnqPkmv2mTQ/https/cdn3d.iconscout.com/3d/premium/thumb/rabbit-3690191-3081431.png?width=433&height=433",
      },
      {
        suggestion:
          "https://images-ext-2.discordapp.net/external/JUPOOJcH_Z-OzD2Vctve3EkqGo_zbB0FOgcGJolc2Qo/https/cdn3d.iconscout.com/3d/premium/thumb/duck-3339546-2797138.png?width=433&height=433",
        correct: true,
      },
      {
        suggestion:
          "https://images-ext-2.discordapp.net/external/-giFAaxUjtXrS--WpYDf_ljVUD5ZbWd6klLT1_Q1qD0/https/cdni.iconscout.com/illustration/premium/thumb/baby-elephant-playing-with-ball-4278543-3550500.png?width=387&height=433",
      },
      {
        suggestion:
          "https://images-ext-1.discordapp.net/external/vvFGxvf8Fg5ez7qAV0K2mldxP2mQhTk_PnDqRCmAG0Y/https/cdn3d.iconscout.com/3d/premium/thumb/bee-4551745-3774537.png?width=433&height=433",
      },
    ],
  },
  {
    suggestions: [
      {
        suggestion:
          "https://images-ext-2.discordapp.net/external/1FTvVvSqhQ02LGjku9nXfSTy1GgEOT8OoMnCcBf48bM/https/cdn3d.iconscout.com/3d/premium/thumb/butterfly-4609618-3811472.png?width=433&height=433",
        correct: true,
      },
      {
        suggestion:
          "https://images-ext-2.discordapp.net/external/WFNNdtg65qqYVjUwZUuk0hWFklsnaXCApnqPkmv2mTQ/https/cdn3d.iconscout.com/3d/premium/thumb/rabbit-3690191-3081431.png?width=433&height=433",
      },
      {
        suggestion:
          "https://images-ext-1.discordapp.net/external/RvjzU7I2-zeCuI8stzAh12XpIjefwuyX7qeworY7krw/https/cdn3d.iconscout.com/3d/premium/thumb/fox-4609630-3811484.png?width=433&height=433",
      },
      {
        suggestion:
          "https://images-ext-1.discordapp.net/external/wGnUvMvoHh18TGnVtrJ5pIFOt2XHeWTSTZluBicm3fo/https/cdn3d.iconscout.com/3d/premium/thumb/bird-4769077-3972350.png?width=433&height=433",
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
if(this.index===3){
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
    if (this.count === 3) {
      this.photo ="https://images-ext-2.discordapp.net/external/bqlYwU1oGL3swILLp2qBksk2Bj7Te2UmswRzMh_4Iog/https/cdn3d.iconscout.com/3d/premium/thumb/three-number-4863643-4056289.png?width=433&height=433"
    }
  }
 
}
