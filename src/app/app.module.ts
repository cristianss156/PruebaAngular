import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { IvaComponent } from './iva/iva.component';
import { IvaDetailComponent } from './iva-detail/iva-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IvaSearchComponent } from './iva-search/iva-search.component';

@NgModule({ declarations: [
        AppComponent,
        IvaComponent,
        IvaDetailComponent,
        MessagesComponent,
        DashboardComponent,
        IvaSearchComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
