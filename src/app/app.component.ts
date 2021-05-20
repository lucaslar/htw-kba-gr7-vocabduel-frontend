import { Component } from '@angular/core';
import { I18nService } from './services/i18n.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(i18n: I18nService) {
        i18n.initialize();
    }
}
