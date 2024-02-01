import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JEENEET11Component } from './jee-neet11/jee-neet11.component';
import { JEENEET12Component } from './jee-neet12/jee-neet12.component';

@Component({
  selector: 'app-jee-neet',
  templateUrl: './jee-neet.component.html',
  styleUrls: ['./jee-neet.component.css'],
})
export class JEENEETComponent implements OnInit {
  dynamicComponent: any;
  fragment: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.dynamicComponent = JEENEET11Component;
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      this.assignComponent(this.fragment);
    });
  }

  assignComponent(value: string) {
    if (value === 'JEE-NEET11') this.dynamicComponent = JEENEET11Component;
    if (value === 'JEE-NEET12') this.dynamicComponent = JEENEET12Component;
  }
}
