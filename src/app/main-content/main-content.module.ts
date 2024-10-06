import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { SkillsComponent } from './skills/skills.component';
import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	imports: [CommonModule, MaterialModule, FontAwesomeModule],
	declarations: [MainContentComponent, SkillsComponent],
	exports: [MainContentComponent],
})
export class MainContentModule {}
