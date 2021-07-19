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
            onClick: async () => this.navigateAndClose('dashboard'),
        },
        {
            icon: 'person_search',
            translationKey: 'header.searchPerson',
            colorClass: 'color-primary',
            onClick: async () => this.navigateAndClose('user-search'),
        },
        {
            icon: 'settings',
            translationKey: 'header.actions.settings',
            colorClass: 'color-primary',
            onClick: async () => this.navigateAndClose('settings'),
        },
        {
            icon: 'language',
            translationKey: 'header.actions.language',
            colorClass: 'color-primary',
            onClick: () => console.log('to be implemented'), // TODO implement
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
    }

    checkMediaQuery(): void {
        if (!this.mobileQuery.matches) {
            this.isSidebarOpened = false;
        }
    }

    private async navigateAndClose(path: string): Promise<void> {
        this.isSidebarOpened = false;
        await this.router.navigate([path]);
    }
}
