import { Component, OnInit } from '@angular/core';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
	selector: 'app-profile-summary',
	templateUrl: './profile-summary.component.html',
	styleUrls: ['./profile-summary.component.css'],
})
export class ProfileSummaryComponent implements OnInit {
	faFileAlt = faFileAlt;

	constructor() {}

	name: string = 'Cfun1';
	role: string = '.NET developer';

	ngOnInit() {}

	downloadCvClicked() {
		throw new Error('Method not implemented.');
	}
	hireClicked() {
		throw new Error('Method not implemented.');
	}
}
