import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  infoUser:any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.infoUser()
    .subscribe(
      res => {
        this.infoUser = res
      }
    )
  }

}
