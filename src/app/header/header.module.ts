import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [CommonModule, FontAwesomeModule, MatIconModule, MatButtonModule],
	declarations: [HeaderComponent, ProfileSummaryComponent],
	exports: [HeaderComponent],
})
export class HeaderModule {}
