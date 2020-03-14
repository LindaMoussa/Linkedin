import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NavComponent } from "./nav/nav.component";
import { ProfileComponent } from "./profile/profile.component";


import { RequestRecommnedationComponent } from "./dialoges/request-recommnedation/request-recommnedation.component";
import { SkillsComponent } from "./dialoges/skills/skills.component";
import { SummaryComponent } from "./dialoges/summary/summary.component";
import { EducationComponent } from "./dialoges/education/education.component";
import { WorkExperienceComponent } from "./dialoges/work-experience/work-experience.component";
import { LanguageComponent } from "./dialoges/language/language.component";


import {MaterialModule} from '../app/material/material.module';


import { SignupComponent } from './registeration/signup/signup.component';
import { SigninComponent } from './registeration/signin/signin.component';
import { LinksComponent } from './dialoges/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfileComponent,
    RequestRecommnedationComponent,
    SkillsComponent,
    SummaryComponent,
    EducationComponent,
    WorkExperienceComponent,
    LanguageComponent,
    SignupComponent,
    SigninComponent,
    LinksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
