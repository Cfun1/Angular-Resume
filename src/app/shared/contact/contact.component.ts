import { JsonPipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
	@ViewChild('contactFormTitle', { read: ElementRef }) title!: ElementRef;
	constructor() {}

	ngOnInit() {}

	onSubmit() {
		// Handle form submission logic here
		alert('Form submitted successfully!');
	}

	animate() {
		const element = this.title.nativeElement;
		element.classList.add('shake');

		// Remove the class after the animation to allow re-triggering it later
		setTimeout(() => {
			element.classList.remove('shake');
		}, 500); // Duration of the shake animation

		console.log();
	}
}
