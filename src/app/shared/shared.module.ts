import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from './socials/socials.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	imports: [CommonModule, FontAwesomeModule],
	declarations: [SocialsComponent],
	exports: [SocialsComponent],
})
export class SharedModule {}
