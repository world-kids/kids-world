import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AnimalComponent } from './components/animal/animal.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ColorsComponent } from './components/colors/colors.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { StoriesComponent } from './components/storiess/stories.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    ChallengesComponent,
    ColorsComponent,
    ContactUsComponent,
    FruitsComponent,
    HomeComponent,
    LoginComponent,
    NumbersComponent,
    SignupComponent,
    StatisticComponent,
    StoriesComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
