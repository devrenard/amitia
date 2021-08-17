import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  
  private baseUrl = "http://localhost:8000/api/"

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  signupUser(user) {
    return this.http.post<any>(this.baseUrl + 'signup', user, {
      withCredentials: true
    })
  }

  loginUser(user) {
    return this.http.post<any>(this.baseUrl + 'login', user, {
      withCredentials: true
    })
  }

  isLoggedIn():boolean {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      () => this.isAuthenticated = true,
      err => false
    );
    return this.isAuthenticated
  }

  getAuthTrue() {
    this.isAuthenticated = true
  }

}
