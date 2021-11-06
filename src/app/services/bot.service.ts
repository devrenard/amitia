import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  private baseUrl = "http://localhost:8000/api/"

  constructor(
    private http: HttpClient
  ) { }

  changeBot(data) {
    return this.http.get(this.baseUrl + 'bot' + data, {withCredentials: true})
  }

}
