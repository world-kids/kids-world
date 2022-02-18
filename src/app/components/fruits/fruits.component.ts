import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeView=true
count=0
index = 0
photo=""
playAudio(){
  let audio=new Audio()
  audio.src=this.sound[this.index]
  audio.load()
  audio.play()
}
sound=["../../../assets/sound/fruits/apple.mp3","../../../assets/sound/fruits/orange.mp3","../../../assets/sound/fruits/Cherry.mp3"]
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
  questions= [
    {
      suggestions: [
        {
          suggestion:
            "https://images-ext-1.discordapp.net/external/4Vtrb00emv36Lqn9xYhCIygWKVgRCtd9mBd8E0uh3_w/https/cdn3d.iconscout.com/3d/premium/thumb/strawberry-fruit-4907445-4086697.png?width=433&height=433",
        },
        {
          suggestion:
            "https://images-ext-1.discordapp.net/external/qnadkzzRVIKzlB-KV2YN_qaTmFzwMknDVopgQx6sufw/https/cdn3d.iconscout.com/3d/premium/thumb/red-apple-fruit-4907442-4086694.png?width=433&height=433",
          correct: true,
        },
        {
          suggestion:
            "https://images-ext-2.discordapp.net/external/Y6rvyq2LVqmSyvs5TtppIQ8isnypLqtdtvqGcG-dLHo/https/cdn3d.iconscout.com/3d/premium/thumb/orange-fruit-4907443-4086695.png?width=433&height=433",
        },
        {
          suggestion:
            "https://images-ext-2.discordapp.net/external/775u_odNPy94pouAsTzio9pj6CnuMJEXTSDoYP4ydOQ/https/cdn3d.iconscout.com/3d/premium/thumb/pineapple-fruit-4907440-4086699.png?width=433&height=433",
        },
      ],
    },
    {
      suggestions: [
        {
          suggestion:
            "https://images-ext-2.discordapp.net/external/sfZdn-krNN8F381L3PD-OjwiqH-6PKls2llYdcalqjg/https/cdn3d.iconscout.com/3d/premium/thumb/kiwi-fruit-4907444-4086696.png?width=433&height=433",
        },
        {
          suggestion:
            "https://images-ext-2.discordapp.net/external/Y6rvyq2LVqmSyvs5TtppIQ8isnypLqtdtvqGcG-dLHo/https/cdn3d.iconscout.com/3d/premium/thumb/orange-fruit-4907443-4086695.png?width=432&height=432",
          correct: true,
        },
        {
          suggestion:
            "https://images-ext-1.discordapp.net/external/IOUwtq--9RbGdzDp5vb1I4nos0ZL-r0OIQ_zHuSeZNw/https/cdn3d.iconscout.com/3d/premium/thumb/avocado-fruit-4907439-4086698.png?width=432&height=432",
        },
        {
          suggestion:
            "https://images-ext-1.discordapp.net/external/Jf3rLP8go52vLi04P-krAQojIDqv4WZ8hVShg9NZafs/https/cdn3d.iconscout.com/3d/premium/thumb/avocado-4452964-3688405.png?width=432&height=432",
        },
      ],
    },
    {
      suggestions: [
        {
          suggestion:
            "https://images-ext-2.discordapp.net/external/MG7QFP--sHmxL59KJ6TlkFVIYBoofOXPUxMqiBy08hw/https/cdn3d.iconscout.com/3d/premium/thumb/cherry-4382461-3640386.png?width=432&height=432",
          correct: true,
        },
        {
          suggestion:
            "https://images-ext-2.discordapp.net/external/9TCQSFtT6Vc78t9PYrByCyGDvEgFtidKDf7hiBBzf4c/https/cdn3d.iconscout.com/3d/premium/thumb/green-grape-4452958-3688399.png?width=432&height=432",
        },
        {
          suggestion:
            "https://images-ext-1.discordapp.net/external/5PbqW4HEfOlIhW1Xe-c5SqbcBaGOCJuWSea7q0lJed4/https/cdn3d.iconscout.com/3d/premium/thumb/lemon-4452962-3688403.png?width=432&height=432",
        },
        { suggestion: "https://images-ext-1.discordapp.net/external/pGG-y71ADZTcFHCd-C9m7tY5-VaKC5XyYJ84TjxqKx0/https/cdn3d.iconscout.com/3d/premium/thumb/carrot-4452973-3688414.png?width=432&height=432"},
      ],
    },
  ]

}
