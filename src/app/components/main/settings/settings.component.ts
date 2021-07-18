import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';
import { StorageService } from '../../../services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
    readonly defaultEndpoint = environment.endpointUrl;

    constructor(
        readonly auth: AuthService,
        readonly storage: StorageService,
        private readonly snackbar: MatSnackBar,
        private readonly translate: TranslateService
    ) {}

    showSnackbar(messageKey: string): void {
        this.snackbar.open(
            this.translate.instant(messageKey),
            this.translate.instant('general.close'),
            { duration: 3000 }
        );
    }
}
