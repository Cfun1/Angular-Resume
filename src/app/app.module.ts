import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './header/header.module';
import { MainContentModule } from './main-content/main-content.module';
import { FooterModule } from './footer/footer.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [AppComponent, NavbarComponent],
	imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule, NgbModule, HeaderModule, MainContentModule, FooterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
