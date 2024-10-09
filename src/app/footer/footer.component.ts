import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactComponent } from '../shared/contact/contact.component';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
	constructor() {}
	@ViewChild(ContactComponent) contactComponent!: ContactComponent;

	ngOnInit() {}

	onclicked() {
		this.contactComponent?.animate();
	}
}
