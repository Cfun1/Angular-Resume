import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
	@ViewChild('contactFormTitle') title!: ElementRef;
	@ViewChild('contactForm') contactForm!: NgForm;

	name: string = '';
	subject: string = '';
	email: string = '';
	message: string = '';

	constructor() {}

	ngOnInit() {}

	onSubmit() {
		console.log('Form Submitted:', this.contactForm.value);
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
