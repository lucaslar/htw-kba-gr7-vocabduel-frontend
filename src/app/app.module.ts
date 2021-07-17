import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { EllipsisTooltipDirective } from './directives/ellipsis-tooltip.directive';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { ErrorService } from './services/error.service';
import { ErrorDialogComponent } from './components/dialogs/error-dialog/error-dialog.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegistrationComponent } from './components/main/registration/registration.component';

const HttpLoaderFactory = (http: HttpClient) => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EllipsisTooltipDirective,
        DashboardComponent,
        SidenavContentComponent,
        ErrorDialogComponent,
        LoginComponent,
        RegistrationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        MaterialModule,
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: ErrorService,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
