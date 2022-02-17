import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeView=true
  count=0
  index = 0
  photo=""
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
              "https://images-ext-2.discordapp.net/external/bqlYwU1oGL3swILLp2qBksk2Bj7Te2UmswRzMh_4Iog/https/cdn3d.iconscout.com/3d/premium/thumb/three-number-4863643-4056289.png?width=433&height=433",
          },
          {
            suggestion:
              "https://images-ext-1.discordapp.net/external/GqMHGoFPwPHrmi28WDpz54lrzjSe6Scsi8Toj-G3nz4/https/cdn3d.iconscout.com/3d/premium/thumb/seven-number-4863644-4056290.png?width=433&height=433",
            correct: true,
          },
          {
            suggestion:
              "https://images-ext-2.discordapp.net/external/UOfr3p17NbEZh6u3KdxEh4MQtlstOcdHP8lO30cfPOE/https/cdn3d.iconscout.com/3d/premium/thumb/five-number-4863647-4056293.png?width=433&height=433",
          },
          {
            suggestion:
              "https://images-ext-2.discordapp.net/external/eX-qTZT6N-secy7zNxRddwidFPnRhvCTlnBcBUlYCH0/https/cdn3d.iconscout.com/3d/premium/thumb/comma-sign-4863650-4056296.png?width=433&height=433",
          },
        ],
      },
      {
        suggestions: [
          {
            suggestion:
              "https://images-ext-2.discordapp.net/external/ARbyf1ozzv81gNLPyZpjCif2h9CEQKW5IFItT4jxywI/https/cdn3d.iconscout.com/3d/premium/thumb/two-number-4863651-4056297.png?width=433&height=433",
          },
          {
            suggestion:
              "https://images-ext-1.discordapp.net/external/GqMHGoFPwPHrmi28WDpz54lrzjSe6Scsi8Toj-G3nz4/https/cdn3d.iconscout.com/3d/premium/thumb/seven-number-4863644-4056290.png?width=433&height=433",
            correct: true,
          },
          {
            suggestion:
              "https://images-ext-2.discordapp.net/external/bqlYwU1oGL3swILLp2qBksk2Bj7Te2UmswRzMh_4Iog/https/cdn3d.iconscout.com/3d/premium/thumb/three-number-4863643-4056289.png?width=433&height=433",
          },
          {
            suggestion:
              "https://images-ext-2.discordapp.net/external/clEANbX-G9V5Cuf4gzflcsUap43l7evK6Sae0t-xt50/https/cdn3d.iconscout.com/3d/premium/thumb/six-number-4863652-4056298.png?width=433&height=433",
          },
        ],
      },
      {
        suggestions: [
          {
            suggestion:
              "https://images-ext-1.discordapp.net/external/nAAd4aTBeDrdQk0ABw7HexXky5zyjmqDBl9Zl4TAZPA/https/cdn3d.iconscout.com/3d/premium/thumb/four-number-4863648-4056294.png?width=433&height=433",
            correct: true,
          },
          {
            suggestion:
              "https://images-ext-1.discordapp.net/external/wIUkqZFwM5NPkjMsXiUnhIxMB6XYymLDIEtrzsOnSMM/https/cdn3d.iconscout.com/3d/premium/thumb/eight-number-4863641-4056287.png?width=433&height=433",
          },
          {
            suggestion:
              "https://images-ext-2.discordapp.net/external/clEANbX-G9V5Cuf4gzflcsUap43l7evK6Sae0t-xt50/https/cdn3d.iconscout.com/3d/premium/thumb/six-number-4863652-4056298.png?width=433&height=433",
          },
          {
            suggestion:
              "https://images-ext-2.discordapp.net/external/UOfr3p17NbEZh6u3KdxEh4MQtlstOcdHP8lO30cfPOE/https/cdn3d.iconscout.com/3d/premium/thumb/five-number-4863647-4056293.png?width=433&height=433",
          },
        ],
      },
    ]
}
