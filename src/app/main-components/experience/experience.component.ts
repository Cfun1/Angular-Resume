import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/models/experience.interface';
import { MockDataStoreService } from 'src/app/services/mock-data-store.service';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
	constructor(private dataService: MockDataStoreService) {}

	experiences!: IExperience[]; //Experience[];

	ngOnInit() {
		this.experiences = this.dataService.getExperience();
	}
}
