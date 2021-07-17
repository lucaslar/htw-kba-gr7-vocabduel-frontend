import { AfterViewInit, Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { StorageService } from '../../../services/storage.service';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements AfterViewInit {
    disableAnimation = true;
    readonly defaultEndpoint = environment.endpointUrl;

    constructor(readonly auth: AuthService, readonly storage: StorageService) {}

    ngAfterViewInit(): void {
        setTimeout(() => (this.disableAnimation = false));
    }
}
