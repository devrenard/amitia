import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  infoUser(): any {
    return this.http.get<any>('http://localhost:8000/api/user', {withCredentials: true})
  }
}
