import { Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    isLoadingIndicated = true;
    isSidebarOpened = false;

    readonly navigationItems = [
        {
            icon: 'home',
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
            onClick: () => console.log('to be implemented'),
        },
    ];

    private readonly mobileQuery: MediaQueryList;

    constructor(media: MediaMatcher, private readonly router: Router) {
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
