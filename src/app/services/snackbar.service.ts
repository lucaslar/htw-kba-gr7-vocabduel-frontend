import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarRef,
    TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    constructor(
        private readonly snackbar: MatSnackBar,
        private readonly translate: TranslateService
    ) {}

    showSnackbar(
        msgKey: string,
        closeKey = 'general.close',
        config = { duration: 3000 }
    ): MatSnackBarRef<TextOnlySnackBar> {
        const close = this.translate.instant(closeKey);
        const msg = this.translate.instant(msgKey);
        return this.snackbar.open(msg, close, config);
    }
}
