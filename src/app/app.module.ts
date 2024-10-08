import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './header/header.module';
import { MainContentModule } from './main-content/main-content.module';
import { FooterModule } from './footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MaterialModule } from './material/material.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/*Import all icons rather than, importing each sing one in component and assign to field, caveat may increase bundle size*/
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // Import all regular icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all brand icons

@NgModule({
	declarations: [AppComponent, NavbarComponent],
	imports: [BrowserModule, AppRoutingModule, NgbModule, HeaderModule, MainContentModule, FooterModule, BrowserAnimationsModule, FontAwesomeModule],
	providers: [],
	bootstrap: [AppComponent],
	exports: [MatChipsModule, MaterialModule, FontAwesomeModule, MatIconModule],
})
export class AppModule {
	constructor(library: FaIconLibrary) {
		// Add all icons to the library for global use
		library.addIconPacks(fas, far, fab);
		//usage:  <fa-icon [icon]="['fas', 'envelope']"></fa-icon>
	}
}
