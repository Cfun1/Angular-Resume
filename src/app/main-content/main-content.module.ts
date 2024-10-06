import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
	imports: [CommonModule],
	declarations: [MainContentComponent, SkillsComponent],
	exports: [MainContentComponent],
})
export class MainContentModule {}
