import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface Solution {
  image: string;
  name: string;
}

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
})
export class SolutionsComponent implements OnInit {
  solutionsCollection: AngularFirestoreCollection<Solution>;
  solutions: Observable<Solution[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}
  ngOnInit(): void {
    this.solutionsCollection = this.afs.collection('solutions');
    this.solutions = this.solutionsCollection.valueChanges();
  }
  redirect(topicname: string): void {
    this.router.navigate(['/pdfchapters'], {
      queryParams: { root: 'solutions', topic: topicname },
    });
  }
}
