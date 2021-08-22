import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { AuthService } from './services/auth.service';
import { BotComponent } from './home/bot/bot.component';
import { BotImgComponent } from './home/bot/bot-img/bot-img.component';
import { BotTextComponent } from './home/bot/bot-text/bot-text.component';
import { MainComponent } from './home/main/main.component';
import { DashboardComponent } from './home/main/dashboard/dashboard.component';
import { RankingComponent } from './home/main/ranking/ranking.component';
import { GamesComponent } from './home/main/games/games.component';
import { ProfilIconComponent } from './home/profil-icon/profil-icon.component';
import { ProfilComponent } from './home/main/profil/profil.component';
import { ParametersComponent } from './home/main/parameters/parameters.component';
import { BotsComponent } from './home/main/bots/bots.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    BotComponent,
    BotImgComponent,
    BotTextComponent,
    MainComponent,
    DashboardComponent,
    RankingComponent,
    GamesComponent,
    ProfilIconComponent,
    ProfilComponent,
    ParametersComponent,
    BotsComponent,
    SignUpComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    AuthService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
