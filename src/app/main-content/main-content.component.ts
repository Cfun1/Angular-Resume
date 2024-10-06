import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/models/experience.interface';
import { MockDataStoreService } from '../services/mock-data-store.service';
import { IEducation } from '../models/education.interface';

@Component({
	selector: 'app-main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
	constructor(private dataService: MockDataStoreService) {}

	experiences!: IExperience[]; //Experience[];
	about!: any; //Experience[];
	educations!: IEducation[]; //Experience[];

	ngOnInit() {
		//   debugger; // This will pause execution and allow you to inspect variables
		this.about = this.dataService.getAbout();
		this.educations = this.dataService.getEducation();
		this.experiences = this.dataService.getExperience();
	}
}
