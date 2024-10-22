import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from './socials/socials.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../material/material.module';
import { MyFontawesomeModule } from '../myfontawesome/myfontawesome.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProfileSummaryComponent } from '../header/profile-summary/profile-summary.component';

@NgModule({
	imports: [CommonModule, FontAwesomeModule, FormsModule, MatButtonModule, MaterialModule, MyFontawesomeModule],
	declarations: [SocialsComponent, ContactComponent, HeaderComponent, FooterComponent, ProfileSummaryComponent],
	exports: [SocialsComponent, ContactComponent, MaterialModule, FontAwesomeModule, MyFontawesomeModule, HeaderComponent, FooterComponent],
})
export class SharedModule {}
