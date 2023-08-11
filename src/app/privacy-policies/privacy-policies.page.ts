import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-privacy-policies',
  templateUrl: './privacy-policies.page.html',
  styleUrls: ['./privacy-policies.page.scss'],
})
export class PrivacyPoliciesPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }

}
