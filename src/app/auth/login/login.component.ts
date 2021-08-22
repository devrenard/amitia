import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onLogin():void {
    this.authService.loginUser(this.form.getRawValue())
      .subscribe( () => {
        this.authService.getAuthTrue();
        this.authService.getBotStatus().subscribe(
          res => { 
            if (res.bot == 0) {
              this.router.navigate(['personnalisation'])
            } else {
              this.router.navigate(['/'])
            }
          }
        )
      })
  }

}
