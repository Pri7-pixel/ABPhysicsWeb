import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Advance11Component } from './advance11/advance11.component';
import { Advance12Component } from './advance12/advance12.component';

@Component({
  selector: 'app-advancedtheory',
  templateUrl: './advancedtheory.component.html',
  styleUrls: ['./advancedtheory.component.css'],
})
export class AdvancedtheoryComponent implements OnInit {
  dynamicComponent: any;
  fragment: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.dynamicComponent = Advance11Component;
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      this.assignComponent(this.fragment);
    });
  }

  assignComponent(value: string) {
    if (value === 'advance11') this.dynamicComponent = Advance11Component;
    if (value === 'advance12') this.dynamicComponent = Advance12Component;
  }
}
