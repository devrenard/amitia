import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  
  private baseUrl = "http://localhost:8000/api/"

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService

  ) { }


  signupUser(user) {
    return this.http.post<any>(this.baseUrl + 'signup', user, {
      withCredentials: true
    })
  }

  checkMail(email) {
    return this.http.post(this.baseUrl + 'checkemail', email, {responseType: 'text'})
  }

  loginUser(user) {
    return this.http.post<any>(this.baseUrl + 'login', user, {
      withCredentials: true
    })
  }

  isLoggedIn():boolean {
    return !!localStorage.getItem('token')
  }

  getAuthTrue() {
    this.isAuthenticated = true
  }

  // Try to get a new page on first time login
  getBotStatus(): any {
    return this.http.get<any>(this.baseUrl + 'botstatus', {withCredentials: true})
  }

}
