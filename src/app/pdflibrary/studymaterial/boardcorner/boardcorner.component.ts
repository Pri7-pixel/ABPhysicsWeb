import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board11Component } from './board11/board11.component';
import { Board12Component } from './board12/board12.component';

@Component({
  selector: 'app-boardcorner',
  templateUrl: './boardcorner.component.html',
  styleUrls: ['./boardcorner.component.css'],
})
export class BoardcornerComponent implements OnInit {
  dynamicComponent: any;
  fragment: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.dynamicComponent = Board11Component;
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      this.assignComponent(this.fragment);
    });
  }

  assignComponent(value: string) {
    if (value === 'board11') this.dynamicComponent = Board11Component;
    if (value === 'board12') this.dynamicComponent = Board12Component;
  }
}
