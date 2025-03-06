// import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule ({
    declarations: [
        AppComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        // AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }