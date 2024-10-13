import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './shared/contact/contact.component';
import { SkillsComponent } from './main-components/skills/skills.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AboutComponent } from './main-components/about/about.component';
import { ExperienceComponent } from './main-components/experience/experience.component';
import { EducationComponent } from './main-components/education/education.component';
import { GuardDeactivateService } from './services/guard-deactivate.service';

const routes: Routes = [
	{ path: '', redirectTo: '/skills', pathMatch: 'full' },
	{ path: 'about', component: AboutComponent },
	{ path: 'skills', component: SkillsComponent },
	{ path: 'education', component: EducationComponent },
	{ path: 'experience', component: ExperienceComponent },
	// { path: 'portfolio', component: MainContentComponent },
	{ path: 'contact', component: ContactComponent, canDeactivate: [GuardDeactivateService] },
	// { path: 'contact/:id', component: ContactComponent },	///dynamic path, ../contact/anything
	{ path: '**', component: NotFoundComponent, data: { message: "Sorry, this page doesn't exist!" } }, //not found path/route
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
