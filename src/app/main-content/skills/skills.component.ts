import { Component, OnInit } from '@angular/core';
import { faAngular, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
	faAngular = faAngular;
	faMicrosoft = faMicrosoft;
	constructor() {}

	ngOnInit() {}
}
