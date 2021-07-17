import { Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    isLoadingIndicated = true;
    isSidebarOpened = false;

    readonly navigationItems = [
        {
            icon: 'dashboard',
            translationKey: 'header.actions.home',
            colorClass: 'color-primary',
            onClick: async () => {
                this.isSidebarOpened = false;
                await this.router.navigate(['dashboard']);
            },
        },
        {
            icon: 'person',
            translationKey: 'header.actions.profile',
            colorClass: 'color-primary',
            onClick: () => console.log('to be implemented'),
        },
        {
            icon: 'language',
            translationKey: 'header.actions.language',
            colorClass: 'color-primary',
            onClick: () => console.log('to be implemented'),
        },
        {
            icon: 'power_settings_new',
            translationKey: 'header.actions.logout',
            colorClass: 'color-warn',
            onClick: () => this.auth.logout(),
        },
    ];

    private readonly mobileQuery: MediaQueryList;

    constructor(
        media: MediaMatcher,
        private readonly router: Router,
        private readonly auth: AuthService
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 576px)');
        // TODO: Use "is loading indicated" in a way that makes sense
        setTimeout(() => (this.isLoadingIndicated = false), 2000);
    }

    checkMediaQuery(): void {
        if (!this.mobileQuery.matches) {
            this.isSidebarOpened = false;
        }
    }
}
