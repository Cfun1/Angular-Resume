import { Injectable } from '@angular/core';
import experiencesData from '@assets/work-experience-data.json';
import aboutData from '@assets/about-data.json';
import educationData from '@assets/education-data.json';
import { IExperience } from '../models/experience.interface';
import { IEducation } from '../models/education.interface';

@Injectable({
	providedIn: 'root',
})
//
export class MockDataStoreService {
	constructor() {}

	getAbout = (): any => aboutData;
	getExperience = (): IExperience[] => experiencesData;
	getEducation = (): IEducation[] => educationData;
}
