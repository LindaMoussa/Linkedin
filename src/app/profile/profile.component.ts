import { Component, OnInit } from "@angular/core";

import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { LanguageComponent } from '../dialoges/language/language.component';
import { SkillsComponent } from '../dialoges/skills/skills.component';
import { EducationComponent } from '../dialoges/education/education.component';
import { RequestRecommnedationComponent } from '../dialoges/request-recommnedation/request-recommnedation.component';
import { SummaryComponent } from '../dialoges/summary/summary.component';
import { WorkExperienceComponent } from '../dialoges/work-experience/work-experience.component';
import { LinksComponent } from '../dialoges/links/links.component';


@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private dialog: MatDialog ) {}

  openDialog(e:any): void {
    let arr = [LanguageComponent, SkillsComponent ,EducationComponent ,
               RequestRecommnedationComponent,SummaryComponent,WorkExperienceComponent , LinksComponent]
    let temp:any = e + 'Component' ;
    // console.log(temp);
    let res =arr.filter(comp => comp.name == temp)
    // console.log( res)
    const dialogRef = this.dialog.open(res[0], {
      width: "550px",
    });
    
  }

  openMedia(){

  }
}
