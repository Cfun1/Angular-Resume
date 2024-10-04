import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { MainContentModule } from './main-content/main-content.module';
import { FooterModule } from './footer/footer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
   
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbModule,
    HeaderModule,
    MainContentModule,
    FooterModule,
    FontAwesomeModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
