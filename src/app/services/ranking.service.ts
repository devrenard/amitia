import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(
    private http: HttpClient
  ) { }

  shifumiRanking(): any {
    return this.http.get<any>('http://localhost:8000/api/ranking-shifumi', {withCredentials: true})
  }

  desRanking(): any {
    return this.http.get<any>('http://localhost:8000/api/ranking-des', {withCredentials: true})
  }

  globalRanking(): any {
    return this.http.get<any>('http://localhost:8000/api/ranking', {withCredentials: true})
  }
}
