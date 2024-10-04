import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css'],
})
export class ProfileSummaryComponent implements OnInit {
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
