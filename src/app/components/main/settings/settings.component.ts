import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';
import { StorageService } from '../../../services/storage.service';
import { PasswordData } from '../../../model/internal/password-data';
import { SnackbarService } from '../../../services/snackbar.service';
import { UserService } from '../../../services/user.service';
import { LoggedInUser } from '../../../model/logged-in-user';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
    readonly defaultEndpoint = environment.endpointUrl;

    readonly passwordData: PasswordData = {
        currentPassword: '',
        newPassword: '',
        confirm: '',
    };

    currentUser?: LoggedInUser;

    constructor(
        readonly auth: AuthService,
        readonly user: UserService,
        readonly storage: StorageService,
        readonly snackbar: SnackbarService
    ) {}

    ngOnInit(): void {
        this.auth.currentUser$.subscribe((user) => {
            if (user) this.currentUser = user;
        });
    }
}
