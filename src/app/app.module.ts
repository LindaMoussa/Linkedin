import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';

import { RequestRecommnedationComponent } from './dialoges/request-recommnedation/request-recommnedation.component';
import { SkillsComponent } from './dialoges/skills/skills.component';
import { SummaryComponent } from './dialoges/summary/summary.component';
import { EducationComponent } from './dialoges/education/education.component';
import { WorkExperienceComponent } from './dialoges/work-experience/work-experience.component';
import { LanguageComponent } from './dialoges/language/language.component';

import { MaterialModule } from '../app/material/material.module';

import { SignupComponent } from './registeration/signup/signup.component';
import { SigninComponent } from './registeration/signin/signin.component';
import { LinksComponent } from './dialoges/links/links.component';
import { PostActionsComponent } from './post/post-actions/post-actions.component';
import { PostBoxComponent } from './post/post-box/post-box.component';
import { PostContentComponent } from './post/post-content/post-content.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostFooterComponent } from './post/post-footer/post-footer.component';
import { PostHeaderComponent } from './post/post-header/post-header.component';
import { PostReactionsInfoComponent } from './post/post-reactions-info/post-reactions-info.component';
import { PostComponent } from './post/post.component';
import { SharedPostComponent } from './shared-post/shared-post.component';
import { ProfileCardComponent } from './profile/profile-card/profile-card.component';

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
    PostActionsComponent,
    PostBoxComponent,
    PostContentComponent,
    PostCreateComponent,
    PostFooterComponent,
    PostHeaderComponent,
    PostReactionsInfoComponent,
    PostComponent,
    SharedPostComponent,
    ProfileCardComponent,
    FlexLayoutModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
