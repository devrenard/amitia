import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BotService } from '../services/bot.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionsComponent implements OnInit {

  questions = [
    {
      question: "Tu viens de perdre à ton jeu pref', que fais-tu ?",
      answers: [
        {text: "Je rage-quit immédiatement 🤬"},
        {text: "On refait une partie !? 🤝 "},
        {text: "Obligé il y a eu de la triche 🤷"}
      ]
    },
    {
      question: "Ton BFF a oublié de ton anniversaire, que penses-tu ?",
      answers: [
        {text: "'Impossible, il ne l’oublierai pas 😇'"},
        {text: "'Ouais comme tous les ans, bref... 😔'"},
        {text: "'Je m'attends à un anniversaire surprise 🎉'"}
      ],
    },
    {
      question: "Tu racontes un terrible secret à ton besta', sa réaction ?",
      answers: [
        {text: "C'est sûr il va s’en souvenir 🧠"},
        {text: "Un câlin et on en parle 🥺"},
        {text: "Une blague pour te faire rire 🤣"}
      ],
    },
    {
      question: "2h seul avec ton meilleur ami, que faites-vous ?",
      answers: [
        {text: "Vous comptez jusqu’à 1 000 000 ⏱"},
        {text: "Musique à fond, vous chantez ! 🎤"},
        {text: "Vous parlez de tout et de rien 🗣"}
      ],
    },
    {
      question: "Votre meilleur(e) idéal ami(e) est :",
      answers: [
        {text: "Branché(e) sur 230 volts ⚡️"},
        {text: "Toujours là pour toi 🤝"},
        {text: "Le plus drôle ! 😜"}
      ],
    },
    {
      question: "",
      answers: [
        {text: ""},
        {text: ""},
        {text: ""}
      ],
    }
  ];

  currentQuestionIndex = 0;

  bot1 = 0;
  bot2 = 0;
  bot3 = 0;

  startDiv = true;
  questionDiv = false;
  resultDiv = false;

  botName = "";
  botImgSelected = ""
  botImg = "assets/img/bots/bot-" + this.botImgSelected +".svg";
  botNumber:number;

  // shared data
  username:string;
  email:string;

  constructor(
    private data: DataService,
    private authService: AuthService,
    private botService: BotService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // shared data
    this.data.currentUsername.subscribe(username => this.username = username)
    this.data.currentEmail.subscribe(email => this.email = email)
  }

  onStart() {
    this.startDiv = false
    this.questionDiv = true
  }

  onAnswer1() {
    this.currentQuestionIndex ++
    this.bot1 ++
    this.checkResult()
  }

  onAnswer2() {
    this.currentQuestionIndex ++
    this.bot2 ++
    this.checkResult()
  }

  onAnswer3() {
    this.currentQuestionIndex ++
    this.bot3 ++
    this.checkResult()
  }

  checkResult () {
    if (this.currentQuestionIndex +1 === this.questions.length) {
      this.questionDiv = false
      this.resultDiv = true
      const botChoice = Math.max(this.bot1, this.bot2, this.bot3)
      switch (botChoice) {
        case this.bot1:
          this.botImg = "assets/img/bots/bot-normal1.svg"
          this.botName = "Hector"
          this.botNumber = 1
          break;
        case this.bot2:
          this.botImg = "assets/img/bots/bot-normal2.svg"
          this.botName = "Lalix"
          this.botNumber = 2
          break;
        case this.bot3:
          this.botImg = "assets/img/bots/bot-normal3.svg"
          this.botName = "Zorg"
          this.botNumber = 3
          break;
      }
      this.selectedBot(this.botNumber)
    }

  }
  selectedBot (data) {
    this.botService.changeBot(data).subscribe(
      res => console.log(res)
    )
  }
}


