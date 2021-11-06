import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { faUser, faArrowRight, faArrowLeft, faEnvelope, faKey, faHeart, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  infoUser:any;

  faUser = faUser;
  faArrowRight = faArrowRight;
  faEnvelope = faEnvelope;
  faKey = faKey;
  faArrowAltCircleRight = faArrowAltCircleRight;

  formUsername: FormGroup;
  formEmail: FormGroup;
  formPassword: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.userService.infoUser()
      .subscribe(
        res => {
          this.infoUser = res
        }
      )

    this.formUsername = this.formBuilder.group({
      username: ['', [Validators.required]]
    })

    this.formEmail = this.formBuilder.group({
      email: ['', [Validators.required]]
    })

    this.formPassword = this.formBuilder.group({
      password: ['', [Validators.required]]
    })
  }

  onChangeUsername() {
    console.log("hello");
  }

  onChangeEmail() {

  }

  onChangePassword() {

  }



}
