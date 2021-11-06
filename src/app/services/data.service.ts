import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // From login to questions
  private username = new BehaviorSubject<string>("");
  currentUsername = this.username.asObservable();
  
  private email = new BehaviorSubject<string>("");
  currentEmail = this.email.asObservable();
  
  // Bots head
  private botHead = new BehaviorSubject<string>("normal");
  currentBotHead = this.botHead.asObservable();

  // Bots text
  private botTextResponseDisplay = new BehaviorSubject<string>("normal");
  currentBotTextResponseDisplay = this.botTextResponseDisplay.asObservable();

  constructor() { }
  // From login to questions
  changeUsername(message: string) {
    this.username.next(message)
  }
  changeEmail(message: string) {
    this.email.next(message)
  }

  // Bots head
  changeBotHead(message: string) {
    this.botHead.next(message)
  }

  // Bots text
  changeBotTextResponseDisplay(message: string) {
    this.botTextResponseDisplay.next(message)
  }
}
