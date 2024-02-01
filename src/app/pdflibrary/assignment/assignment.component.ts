import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProblemsComponent } from './problems/problems.component';
import { SolutionsComponent } from './solutions/solutions.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  dynamicComponent: any;
  fragment: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.dynamicComponent = ProblemsComponent;
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      this.assignComponent(this.fragment);
    });
  }

  assignComponent(value: string) {
    if (value === 'problems') this.dynamicComponent = ProblemsComponent;
    if (value === 'solutions') this.dynamicComponent = SolutionsComponent;
  }
}
