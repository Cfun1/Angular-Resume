import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import experiencesData from '@assets/work-experience-data.json';
import aboutData from '@assets/about-data.json';
import educationData from '@assets/education-data.json';

@Component({
	selector: 'app-main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
	constructor() {}

	experiences!: any; //Experience[];
	about!: any; //Experience[];
	educations!: any; //Experience[];

	ngOnInit() {
		//   debugger; // This will pause execution and allow you to inspect variables

		this.experiences = experiencesData; //this.getExperiences();
		this.about = aboutData; //this.getExperiences();
		this.educations = educationData; //this.getExperiences();

		console.log(this.about);
		// this.getExperience();
	}

	getExperiences() {
		this.experiences = experiencesData;
		alert(`${this.experiences}  `);
	}

	getExperience(): Experience[] {
		return (experiencesData as Experience[]).map((experience) => new Experience(experience.role, experience.period, experience.company, experience.content));
	}
}
