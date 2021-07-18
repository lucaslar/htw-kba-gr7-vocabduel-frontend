import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
import { LoggedInUser } from '../model/logged-in-user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private readonly http: HttpClient,
        private readonly auth: AuthService,
        private readonly storage: StorageService,
        private readonly snackbar: SnackbarService
    ) {}

    deleteAccount(user: LoggedInUser): void {
        this.http
            .delete(`${this.storage.endpointUrl}/user/delete-account`)
            .subscribe(() => {
                this.auth.logout();
                this.snackbar.showSnackbar('snackbar.accountDeleted', user);
            });
    }
}
