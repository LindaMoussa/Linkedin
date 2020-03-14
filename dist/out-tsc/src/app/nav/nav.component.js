import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
let NavComponent = class NavComponent {
    // {text: 'Two', cols:8 , rows: 2, color: 'transparent'},
    // {text: '', cols: 2, rows: 1, color: 'transparent'},
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(result => result.matches), shareReplay());
        this.tiles = [
            { text: '', cols: 2, rows: 1, color: 'transparent' },
        ];
        this.tiles2 = [
            { text: '', cols: 2, rows: 1, color: 'transparent' },
        ];
        this.tiles3 = [
            { text: '', cols: 8, rows: 1, color: 'transparent' },
        ];
    }
};
NavComponent = __decorate([
    Component({
        selector: 'app-nav',
        templateUrl: './nav.component.html',
        styleUrls: ['./nav.component.scss']
    })
], NavComponent);
export { NavComponent };
//# sourceMappingURL=nav.component.js.map