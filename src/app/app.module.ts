import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

import { AppComponent } from './app.component.js';
import { IvaComponent } from './iva/iva.component.js';
import { IvaDetailComponent } from './iva-detail/iva-detail.component.js';
import { MessagesComponent } from './messages/messages.component.js';
import { AppRoutingModule } from './app-routing.module.js';
import { DashboardComponent } from './dashboard/dashboard.component.js';
import { IvaSearchComponent } from './iva-search/iva-search.component.js';

@NgModule({
    declarations: [
        AppComponent,
        IvaComponent,
        IvaDetailComponent,
        MessagesComponent,
        DashboardComponent,
        IvaSearchComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        AppRoutingModule], providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())]
})
export class AppModule { }
