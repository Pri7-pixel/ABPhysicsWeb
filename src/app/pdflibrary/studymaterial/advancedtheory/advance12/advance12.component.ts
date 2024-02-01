import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface Advance12 {
  image: string;
  name: string;
  Number: string;
}

@Component({
  selector: 'app-advance12',
  templateUrl: './advance12.component.html',
  styleUrls: ['./advance12.component.css'],
})
export class Advance12Component implements OnInit {
  advance12sCollection: AngularFirestoreCollection<Advance12>;
  advance12s: Observable<Advance12[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}
  ngOnInit(): void {
    this.advance12sCollection = this.afs.collection(
      'class12AdvancedTheory',
      (ref) => {
        return ref.orderBy('Number');
      }
    );
    this.advance12s = this.advance12sCollection.valueChanges();
  }
  redirect(topicname: string): void {
    this.router.navigate(['/pdfchapters'], {
      queryParams: { root: 'class12AdvancedTheory', topic: topicname },
    });
  }
}
