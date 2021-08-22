import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private username = new BehaviorSubject<string>("");
  currentUsername = this.username.asObservable();
  
  private email = new BehaviorSubject<string>("");
  currentEmail = this.email.asObservable();

  constructor() { }

  changeUsername(message: string) {
    this.username.next(message)
  }

  changeEmail(message: string) {
    this.email.next(message)
  }
}
