/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockDataStoreService } from './mock-data-store.service';

describe('Service: MockDataStore', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [MockDataStoreService],
		});
	});

	it('should ...', inject([MockDataStoreService], (service: MockDataStoreService) => {
		expect(service).toBeTruthy();
	}));
});
