import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from './socials/socials.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [CommonModule, FontAwesomeModule, FormsModule, MatButtonModule],
	declarations: [SocialsComponent, ContactComponent],
	exports: [SocialsComponent, ContactComponent],
})
export class SharedModule {}
