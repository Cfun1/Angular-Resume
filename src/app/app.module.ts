import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { ProfileSummaryComponent } from './header/profile-summary/profile-summary.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
   ],
  providers: [],
  bootstrap: [NavbarComponent]//AppComponent]
})
export class AppModule { }
