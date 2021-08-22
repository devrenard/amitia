import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import Typewriter from 't-writer.js';


@Component({
  selector: 'app-bot-text',
  templateUrl: './bot-text.component.html',
  styleUrls: ['./bot-text.component.css']
})
export class BotTextComponent implements OnInit {
  user:any;
  message="";

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.userService.infoUser()
    //   .subscribe(
    //     res => {
    //       this.message = `Bonjour ${res.username}, tu es prêt à jouer ?`;
    //     }
    //   )

        this.userService.infoUser()
      .subscribe(
        res => {

          const target = document.querySelector('.tw');

          const writer = new Typewriter(target, {
            loop: false,
            typeSpeed: 80,
            deleteSpeed: 80,
            typeColor: `#436697`
          });

          writer
          .type(`Bonjour ${res.username}, comment vas-tu aujourd'hui ?`)
          .rest(4500)
          .changeOps({ deleteSpeed: 30 })
          .remove(28)
          .type(`on joue au Shifumi 👊 ?`)
          .rest(4500)
          .changeOps({ deleteSpeed: 30 })
          .remove(40)
          .type(`Tu as ${res.pointsShifumi} points au Shifumi, tu penses pouvoir faire mieux ?`)
          // .rest(2500)
          // .clear()
          .start()
  
        }
      )
    }


  
}
