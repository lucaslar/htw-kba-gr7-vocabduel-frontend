import { NgModule } from '@angular/core';
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
import { DashboardComponent } from './components/dashboard/dashboard.component';

const HttpLoaderFactory = (http: HttpClient) => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EllipsisTooltipDirective,
        DashboardComponent,
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
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
