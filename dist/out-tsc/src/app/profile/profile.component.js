import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { LanguageComponent } from '../dialoges/language/language.component';
import { SkillsComponent } from '../dialoges/skills/skills.component';
import { EducationComponent } from '../dialoges/education/education.component';
import { RequestRecommnedationComponent } from '../dialoges/request-recommnedation/request-recommnedation.component';
import { SummaryComponent } from '../dialoges/summary/summary.component';
import { WorkExperienceComponent } from '../dialoges/work-experience/work-experience.component';
let ProfileComponent = class ProfileComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() { }
    openDialog(e) {
        let arr = [LanguageComponent, SkillsComponent, EducationComponent,
            RequestRecommnedationComponent, SummaryComponent, WorkExperienceComponent];
        let temp = e + 'Component';
        // console.log(temp);
        let res = arr.filter(comp => comp.name == temp);
        // console.log( res)
        const dialogRef = this.dialog.open(res[0], {
            width: "550px"
        });
    }
};
ProfileComponent = __decorate([
    Component({
        selector: "app-profile",
        templateUrl: "./profile.component.html",
        styleUrls: ["./profile.component.scss"]
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map