import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
const MaterialComponents = [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule, MatGridListModule, MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule
];
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    NgModule({
        imports: [MaterialComponents
        ],
        exports: [MaterialComponents]
    })
], MaterialModule);
export { MaterialModule };
//# sourceMappingURL=material.module.js.map