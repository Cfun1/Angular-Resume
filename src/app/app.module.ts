import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { MainModule } from './main-components/main.module';

@NgModule({
	declarations: [AppComponent, NavbarComponent],
	imports: [BrowserModule, AppRoutingModule, NgbModule, MainModule, BrowserAnimationsModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
