import { NgModule } from '@angular/core';
import {HomeComponent} from '../app/components/home/home.component'; 
import {ChallengesComponent} from '../app/components/challenges/challenges.component';
import {ContactUsComponent} from '../app/components/contact-us/contact-us.component'
import {StatisticComponent} from '../app/components/statistic/statistic.component'
import {ColorsComponent} from '../app/components/colors/colors.component'
import {AnimalComponent} from '../app/components/animal/animal.component'
import { RouterModule, Routes } from '@angular/router';
import {FruitsComponent} from '../app/components/fruits/fruits.component'
import {NumbersComponent} from '../app/components/numbers/numbers.component'
import {LoginComponent} from '../app/components/login/login.component';
import {SignupComponent} from '../app/components/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { SignupGuard } from './signup.guard';
import { StoryComponent } from './components/story/story.component';
import { StoriesComponent } from './components/storiess/stories.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path: 'challenges', component:ChallengesComponent,canActivate:[AuthGuard]},
  {path: 'contact-us', component:ContactUsComponent,canActivate:[AuthGuard]},
  {path: 'statistic', component:StatisticComponent,canActivate:[AuthGuard]},
  {path: 'colors', component:ColorsComponent,canActivate:[AuthGuard]},
  {path: 'animal', component:AnimalComponent,canActivate:[AuthGuard]},
  {path: 'fruits', component:FruitsComponent,canActivate:[AuthGuard]},
  {path: 'numbers', component:NumbersComponent,canActivate:[AuthGuard]},
   {path:'story'  , component:StoryComponent, canActivate:[AuthGuard]},
   {path:'stories'  , component:StoriesComponent, canActivate:[AuthGuard]},
  {path: 'login', component:LoginComponent,canActivate:[SignupGuard]},
  {path: 'signup', component:SignupComponent,canActivate:[SignupGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
