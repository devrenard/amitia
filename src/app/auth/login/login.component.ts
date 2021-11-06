import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faEnvelope = faEnvelope;
  faKey = faKey;
  
  form: FormGroup;

  errorMessage = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLogin():void {
    this.authService.loginUser(this.form.getRawValue())
      .subscribe( (res) => {
        this.authService.getAuthTrue();
        localStorage.setItem('token', res.token)
        this.authService.getBotStatus().subscribe(
          res => { 
            if (res.bot == 0) {
              this.router.navigate(['personnalisation'])
            } else {
              this.router.navigate(['/'])
            }
          }
        )
      },
      (err) => {
        this.errorMessage = err.error.message
        } 
      )
  }

  onPassword(event: Event) {
    this.errorMessage = ""
  }
  
  onEmail(event: Event) {
    this.errorMessage = ""
  }

}
