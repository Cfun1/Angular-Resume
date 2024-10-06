import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	imports: [CommonModule, FontAwesomeModule],
	declarations: [HeaderComponent, ProfileSummaryComponent],
	exports: [HeaderComponent],
})
export class HeaderModule {}
