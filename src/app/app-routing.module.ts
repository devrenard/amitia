import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { RankingComponent } from './home/main/ranking/ranking.component';
import { DashboardComponent } from './home/main/dashboard/dashboard.component';
import { GamesComponent } from './home/main/games/games.component';
import { ProfilComponent } from './home/main/profil/profil.component';
import { ParametersComponent } from './home/main/parameters/parameters.component';
import { BotsComponent } from './home/main/bots/bots.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'personnalisation', component: QuestionsComponent },
  { path: '', component: HomeComponent
  // , canActivate: [AuthGuard] 
  , children: [
    { path: '', component: DashboardComponent },
    { path: 'classement', component: RankingComponent },
    { path: 'jeux', component: GamesComponent },
    { path: 'parametres', component: ParametersComponent },
    { path: 'bots', component: BotsComponent },
    { path: 'profil', component: ProfilComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
