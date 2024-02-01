import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class11Component } from './class11/class11.component';
import { Class12Component } from './class12/class12.component';

@Component({
  selector: 'app-classroomwork',
  templateUrl: './classroomwork.component.html',
  styleUrls: ['./classroomwork.component.css'],
})
export class ClassroomworkComponent implements OnInit {
  dynamicComponent: any;
  fragment: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.dynamicComponent = Class11Component;
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      this.assignComponent(this.fragment);
    });
  }

  assignComponent(value: string) {
    if (value === 'class11') this.dynamicComponent = Class11Component;
    if (value === 'class12') this.dynamicComponent = Class12Component;
  }
}
