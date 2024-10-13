import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable, tap } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/services/guard-deactivate.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, CanComponentDeactivate {
	@ViewChild('contactFormTitle') title!: ElementRef;
	@ViewChild('contactForm') contactForm!: NgForm;
	@ViewChild('dialog') dialogTemplate!: ElementRef;

	name: string = '';
	subject: string = '';
	email: string = '';
	message: string = '';

	constructor(private modalService: NgbModal) {}

	canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
		const modalRef: NgbModalRef = this.modalService.open(this.dialogTemplate, {
			backdrop: 'static',
			keyboard: false,
		});

		return from(
			modalRef.result.then(
				(result) => result === 'Yes', // Return true if 'Yes' is clicked
				() => false // Return false on dismiss or 'No'
			)
		);
	}

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
