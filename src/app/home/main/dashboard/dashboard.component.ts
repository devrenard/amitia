import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  globalScore:number;
  level:string;
  time:any;

  // shared Data
  botHead: string;
  botTextResponseDisplay:string;

  myDate = Date.now();

  constructor(
    private userService: UserService,
    private data: DataService,

  ) {

   }

  ngOnInit(): void {

    this.userService.infoUser()
      .subscribe(
        res => {
          this.globalScore = res.pointsShifumi + res.pointsDes;

          if (res.pointsShifumi + res.pointsDes < 50) {
            this.level = "Rookie 👶"
          } else if (res.pointsShifumi + res.pointsDes < 100) {
            this.level = "Professionnel 🥷"
          } else if (res.pointsShifumi + res.pointsDes < 150) {
            this.level = "Superstar ⭐️"
          } else {
            this.level = "Légende ⚔️"
          }
        }
      )

    // shared data
    this.data.currentBotHead.subscribe(botHead => this.botHead = botHead)
    this.data.currentBotTextResponseDisplay.subscribe(botTextResponseDisplay => this.botTextResponseDisplay = botTextResponseDisplay)
  }

  onSayHello() {
    clearTimeout(this.time)
    this.data.changeBotHead("happy")
    this.data.changeBotTextResponseDisplay("hello")
    this.time = setTimeout(()=> {
      this.data.changeBotHead("normal")
      this.data.changeBotTextResponseDisplay("normal")
    }, 5000);
  }

  onWhatsUp() {
    clearTimeout(this.time)
    this.data.changeBotHead("oh")
    this.data.changeBotTextResponseDisplay("up")
    this.time = setTimeout(()=> {
      this.data.changeBotHead("normal")
      this.data.changeBotTextResponseDisplay("normal")
    }, 5000);
  }

  onSendLove() {
    clearTimeout(this.time)
    this.data.changeBotHead("happy")
    this.data.changeBotTextResponseDisplay("love")
    this.time = setTimeout(()=> {
      this.data.changeBotHead("normal")
      this.data.changeBotTextResponseDisplay("normal")
    }, 5000);
  }

  onMakeFun() {
    clearTimeout(this.time)
    this.data.changeBotHead("funny")
    this.data.changeBotTextResponseDisplay("fun")
    this.time = setTimeout(()=> {
      this.data.changeBotHead("normal")
      this.data.changeBotTextResponseDisplay("normal")
    }, 2500);
  }

  onSayGoodbye() {
    clearTimeout(this.time)
    this.data.changeBotHead("sad")
    this.data.changeBotTextResponseDisplay("bye")
    this.time = setTimeout(()=> {
      this.data.changeBotHead("normal")
      this.data.changeBotTextResponseDisplay("normal")
    }, 5000);
  }

}
