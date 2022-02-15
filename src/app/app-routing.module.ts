import { NgModule } from '@angular/core';
import {HomeComponent} from '../app/components/home/home.component'; 
import {ChallengesComponent} from '../app/components/challenges/challenges.component';
import {ContactUsComponent} from '../app/components/contact-us/contact-us.component'
import {StatisticComponent} from '../app/components/statistic/statistic.component'
import {ColorsComponent} from '../app/components/colors/colors.component'
import {AnimalComponent} from '../app/components/animal/animal.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'challenges', component:ChallengesComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: 'statistic', component:StatisticComponent},
  {path: 'colors', component:ColorsComponent},
  {path: 'animal', component:AnimalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
