import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bot-img',
  templateUrl: './bot-img.component.html',
  styleUrls: ['./bot-img.component.css']
})
export class BotImgComponent implements OnInit {
  botNumber: number;
  
  // shared data
  botHead: string;

  constructor(
    private http: HttpClient,
    private data: DataService
  ) { }

  ngOnInit(): void {
    // shared data
    this.data.currentBotHead.subscribe(botHead => this.botHead = botHead)
    
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.botNumber = res.bot;
      }
    );

  }

}
