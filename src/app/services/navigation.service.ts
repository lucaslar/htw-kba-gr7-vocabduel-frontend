import { Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    isLoadingIndicated = true;
    isSidebarOpened = false;
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
