import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser, faArrowRight, faArrowLeft, faEnvelope, faKey, faHeart, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SignUpComponent implements OnInit {
  faUser = faUser;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faEnvelope = faEnvelope;
  faKey = faKey;
  faHeart = faHeart;
  faArrowAltCircleRight = faArrowAltCircleRight;

  questions = [
    'Choisis ton nom de joueur !',
    'Quel est ton adresse mail ?',
    'Choisis ton mot de passe !',
    'Confirmes ton mot de passe !',
    ''
  ];
  positionQ = 0;

  errorMessage = "";

  password1 = "";
  password2 = "";

  form: FormGroup;
  formValid = false;

  // shared data
  username:string;
  email:string;

  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private data: DataService

  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/")]]
    })

    // shared data
    this.data.currentUsername.subscribe(username => this.username = username)
    this.data.currentEmail.subscribe(email => this.email = email)
  }

  next1(usernameInput) {
    if (usernameInput.value == "") {
      this.errorMessage = "Ton nom de joueur ne peux pas être vide"
      this.errbg(".field-name")
    } else if (usernameInput.value.length >= 20) {
      this.errorMessage = "Ton nom doit faire moins de 20 caractères"
      this.errbg(".field-name")
    } else if (usernameInput.value.length <= 3) {
      this.errorMessage = "Ton nom doit faire au moins 3 caractères"
      this.errbg(".field-name")
    } else {
      this.username = usernameInput.value
      this.next(".field-name", ".field-email")
    }
  }

  previous1() {
    this.previous(".field-email", ".field-name")
  }

  next2(inputEmail) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(inputEmail.value)) {
      this.authService.checkMail(this.form.value).subscribe(
        res => {
          if (res == "ok") {
            this.errorMessage = ""
            this.next(".field-email", ".field-password1")
          }
          if (res == "Cette adresse mail est déjà utilisée") {
            this.errorMessage = res
            this.errbg(".field-email")
          }
        }
      )
    } else {
      this.errorMessage = "Ton adresse mail n'est pas valide";
      this.errbg(".field-email")
    }
  }

  previous2() {
    this.previous(".field-password1", ".field-email")
  }

  next3(inputPassword1) {
    const validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (validation.test(inputPassword1.value)) {
      this.password1 = inputPassword1.value
      this.next(".field-password1", ".field-password2");
      setTimeout ( () => {
        this.formValid = true;
      }, 200);
    } else {
      this.errorMessage = "Ton mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial";
      this.errbg(".field-password1");
    }
  }

  previous3() {
    this.previous(".field-password2", ".field-password1");
    this.formValid = false;
  }

  next(field, nextField) {
    let currentInput = this.elementRef.nativeElement.querySelector(field)
    if(!currentInput.classList.contains('inactive')) {
      currentInput.classList.add('inactive')
    }

    let nextInput = this.elementRef.nativeElement.querySelector(nextField)
    nextInput.classList.remove('inactive')

    this.positionQ ++;
    this.errorMessage = "";
    let bgerror = this.elementRef.nativeElement.querySelector(".content-signup")
    bgerror.classList.remove('error-bg')
  }

  errbg(field) {
    let bgerror = this.elementRef.nativeElement.querySelector(".content-signup")
    bgerror.classList.add('error-bg')
    let shaker = this.elementRef.nativeElement.querySelector(field)
    shaker.classList.add('shaker')
    setTimeout ( () => {
      shaker.classList.remove('shaker')
    }, 600);
  }

  previous(field, previousField) {
    let currentInput = this.elementRef.nativeElement.querySelector(field)
    if(!currentInput.classList.contains('inactive')) {
      currentInput.classList.add('inactive')
    }

    let nextInput = this.elementRef.nativeElement.querySelector(previousField)
    nextInput.classList.remove('inactive')

    this.positionQ --;
    this.errorMessage = "";
    let bgerror = this.elementRef.nativeElement.querySelector(".content-signup")
    bgerror.classList.remove('error-bg')
  }

  onUsername(event: Event) {
    let bgerror = this.elementRef.nativeElement.querySelector(".content-signup")
    bgerror.classList.remove('error-bg')
    this.errorMessage = "";
  }

  onEmail(event: Event) {
    let bgerror = this.elementRef.nativeElement.querySelector(".content-signup")
    bgerror.classList.remove('error-bg')
    this.errorMessage = "";
  }

  onPassword(event: Event) {
    let bgerror = this.elementRef.nativeElement.querySelector(".content-signup")
    bgerror.classList.remove('error-bg')
    this.errorMessage = "";
  }

  onConfirmPassword(event: Event) {
    this.password2 = (<HTMLInputElement>event.target).value
    let bgerror = this.elementRef.nativeElement.querySelector(".content-signup")
    bgerror.classList.remove('error-bg')
    this.errorMessage = "";
  }

  onSignup():void {
    if (this.password2 == "") {
      this.errorMessage = "Tu dois confirmer ton mot de passe !"
      this.errbg(".field-password2")
    } else if (this.password2 !== this.password1) {
      this.errorMessage = "Ton mot de passe ne correspond pas au premier"
      this.errbg(".field-password2")
    } else {
      // console.log(this.password1, this.password2);
      // console.log(this.form.getRawValue());
      this.data.changeUsername(this.username)
      this.data.changeEmail(this.email)
      this.authService.signupUser(this.form.getRawValue())
        .subscribe( () => this.router.navigate(['/']));
    }
  }

}
