import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LanguageComponent = class LanguageComponent {
    constructor() {
        this.languages = ['Arabic', 'English', 'French', 'Spanich'];
    }
    ngOnInit() {
    }
};
LanguageComponent = __decorate([
    Component({
        selector: 'app-language',
        templateUrl: './language.component.html',
        styleUrls: ['./language.component.scss']
    })
], LanguageComponent);
export { LanguageComponent };
//# sourceMappingURL=language.component.js.map