import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Found10Component } from './found10/found10.component';
import { Found9Component } from './found9/found9.component';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css'],
})
export class FoundationComponent implements OnInit {
  dynamicComponent: any;
  fragment: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.dynamicComponent = Found9Component;
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      this.assignComponent(this.fragment);
    });
  }

  assignComponent(value: string) {
    if (value === 'found9') this.dynamicComponent = Found9Component;
    if (value === 'found10') this.dynamicComponent = Found10Component;
  }
}
