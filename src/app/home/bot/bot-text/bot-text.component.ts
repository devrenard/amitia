import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import Typewriter from 't-writer.js';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-bot-text',
  templateUrl: './bot-text.component.html',
  styleUrls: ['./bot-text.component.css']
})
export class BotTextComponent implements OnInit {
  user:any;
  message="";

  // shared data
  botMessage:string;
  botTextResponseDisplay:string;

  constructor(
    private userService: UserService,
    private data: DataService
  ) { }

  ngOnInit(): void {

    // shared data
    this.data.currentBotTextResponseDisplay.subscribe(botTextResponseDisplay => this.botTextResponseDisplay = botTextResponseDisplay)

    this.userService.infoUser()
      .subscribe(
        res => {
          // Normal
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
          .start()
        }
      )

    // Hello
    const targetHello = document.querySelector('.twHello');
    const writerHello = new Typewriter(targetHello, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 5,
      typeColor: `#436697`
    });
    writerHello
    .type(`hello, ça fait plaisir de te revoir 😀 `)
    .start()

    // Up
    const targetUp = document.querySelector('.twUp');
    const writerUp = new Typewriter(targetUp, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 5,
      typeColor: `#436697`
    });
    writerUp
    .type(`Ça va super et toi ? 😎`)
    .start()

    // Love
    const targetLove = document.querySelector('.twLove');
    const writerLove = new Typewriter(targetLove, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 5,
      typeColor: `#436697`
    });
    writerLove
    .type(`Oooooh, mais moi aussi je t'aime !`)
    .start()

    // Fun
    const targetFun = document.querySelector('.twFun');
    const writerFun = new Typewriter(targetFun, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 5,
      typeColor: `#436697`
    });
    writerFun
    .type(`On verra bien qui rira le dernier lol 🤣`)
    .start()

    // Bye
    const targetBye = document.querySelector('.twBye');
    const writerBye = new Typewriter(targetBye, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 5,
      typeColor: `#436697`
    });
    writerBye
    .type(`Bye bye, reviens vite ! On s'est bien amusé 😛`)
    .start()
  }

}
