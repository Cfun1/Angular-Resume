import { Component, Input, OnInit } from '@angular/core';
import { MockDataStoreService } from 'src/app/services/mock-data-store.service';
import { Social } from './social.interface';

@Component({
	selector: 'app-socials',
	templateUrl: './socials.component.html',
	styleUrls: ['./socials.component.css'],
})
export class SocialsComponent implements OnInit {
	@Input() socials!: Social[]; // Use the Social interface

	constructor(private dataService: MockDataStoreService) {}

	ngOnInit() {
		if (this.socials === undefined) {
			//if no input provided load the default
			this.socials = this.dataService.getSocials();
		}
	}
}
