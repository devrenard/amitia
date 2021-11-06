import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { BotService } from 'src/app/services/bot.service';


@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css']
})
export class BotsComponent implements OnInit {

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  imgBot = "";

  botPosition: number;
  botArray = [
    "assets/img/bots/bot-normal1.svg",
    "assets/img/bots/bot-normal2.svg",
    "assets/img/bots/bot-normal3.svg"
  ]

  constructor(
    private http: HttpClient,
    private botService: BotService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        // this.imgBot = `assets/img/bots/bot-normal${res.bot}.svg`;
        this.botPosition = res.bot - 1;
      }
    );
  }

  previous() {
    if (this.botPosition == 0) {
      this.botPosition = 2
    } else {
      this.botPosition --
    }
  }

  next() {
    if (this.botPosition == 2) {
      this.botPosition = 0
    } else {
      this.botPosition ++
    }
  }

  onChangeBot(data) {
    this.botService.changeBot(data).subscribe(
      res => console.log(res)
    )
    // this.router.navigate[('/bots')]
  }

}
