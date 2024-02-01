import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface Problem {
  image: string;
  name: string;
}

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css'],
})
export class ProblemsComponent implements OnInit {
  problemsCollection: AngularFirestoreCollection<Problem>;
  problems: Observable<Problem[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}
  ngOnInit(): void {
    this.problemsCollection = this.afs.collection('problems');
    this.problems = this.problemsCollection.valueChanges();
  }
  redirect(topicname: string): void {
    this.router.navigate(['/pdfchapters'], {
      queryParams: { root: 'problems', topic: topicname },
    });
  }
}
