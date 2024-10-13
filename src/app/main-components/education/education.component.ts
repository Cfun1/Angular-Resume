import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/models/education.interface';
import { MockDataStoreService } from 'src/app/services/mock-data-store.service';

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
	constructor(private dataService: MockDataStoreService) {}
	educations!: IEducation[]; //Experience[];

	ngOnInit() {
		this.educations = this.dataService.getEducation();
		//   debugger; // This will pause execution and allow you to inspect variables
	}
}
