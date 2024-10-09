import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { SkillsComponent } from './skills/skills.component';
import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [CommonModule, MaterialModule, FontAwesomeModule, SharedModule],
	declarations: [MainContentComponent, SkillsComponent],
	exports: [MainContentComponent],
})
export class MainContentModule {}
