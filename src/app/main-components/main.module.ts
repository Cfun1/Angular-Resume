import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [AboutComponent, ExperienceComponent, SkillsComponent, EducationComponent],
	exports: [AboutComponent, ExperienceComponent],
})
export class MainModule {}
