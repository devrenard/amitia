import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../../services/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  shifumiRanking = [];
  desRanking = [];

  constructor(
    private rankingService: RankingService
  ) { }

  ngOnInit(): void {
    this.rankingService.shifumiRanking()
      .subscribe(
        res => this.shifumiRanking = res
      )

    this.rankingService.desRanking()
    .subscribe(
      res => this.desRanking = res
    )
  }


}
