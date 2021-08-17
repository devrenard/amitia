import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { RankingComponent } from './home/main/ranking/ranking.component';
import { DashboardComponent } from './home/main/dashboard/dashboard.component';
import { GamesComponent } from './home/main/games/games.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent
  // , canActivate: [AuthGuard] 
  , children: [
    { path: '', component: DashboardComponent },
    { path: 'classement', component: RankingComponent },
    { path: 'jeux', component: GamesComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
