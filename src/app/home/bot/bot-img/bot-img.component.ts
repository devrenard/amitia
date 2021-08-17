import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot-img',
  templateUrl: './bot-img.component.html',
  styleUrls: ['./bot-img.component.css']
})
export class BotImgComponent implements OnInit {
  imgBot = ""

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.imgBot = `assets/img/bots/bot-normal${res.bot}.svg`;
      }
    );
  }

}
