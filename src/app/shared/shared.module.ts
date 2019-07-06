import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    NgbModalConfig,
    NgbModal,

} from '@ng-bootstrap/ng-bootstrap';

// Material modules
import {
    MatDialogModule,

} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        BrowserAnimationsModule,
        // NgbModal,

      MatDialogModule,

    ],
    exports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        // NgbModal,

        // Material modules
        MatDialogModule,
    ]

})
export class SharedModule { }
