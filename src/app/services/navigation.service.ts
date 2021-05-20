import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    isLoadingIndicated = true;

    // TODO: Use "is loading indicated" in a way that makes sense
    constructor() {
        setTimeout(() => (this.isLoadingIndicated = false), 2000);
    }
}
