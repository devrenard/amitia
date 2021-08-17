import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  globalScore:number;
  level:string;

  constructor(
    private userService: UserService
  ) { }

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
  }

  

}
