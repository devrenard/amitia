import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AuthService } from './auth/auth.service';
import { ProfilComponent } from './home/profil/profil.component';
import { BotComponent } from './home/bot/bot.component';
import { BotImgComponent } from './home/bot/bot-img/bot-img.component';
import { BotTextComponent } from './home/bot/bot-text/bot-text.component';
import { MainComponent } from './home/main/main.component';
import { DashboardComponent } from './home/main/dashboard/dashboard.component';
import { RankingComponent } from './home/main/ranking/ranking.component';
import { GamesComponent } from './home/main/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProfilComponent,
    BotComponent,
    BotImgComponent,
    BotTextComponent,
    MainComponent,
    DashboardComponent,
    RankingComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
