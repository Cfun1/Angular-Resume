import { Component, OnInit } from '@angular/core';
import { MockDataStoreService } from 'src/app/services/mock-data-store.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
	constructor(private dataService: MockDataStoreService) {}

	about!: any; //Experience[];

	ngOnInit() {
		this.about = this.dataService.getAbout();
	}
}
