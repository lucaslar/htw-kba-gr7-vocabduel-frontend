import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatTooltipModule,
    ],
})
export class MaterialModule {}
