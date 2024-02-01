import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface Advance11 {
  image: string;
  name: string;
  Number: string;
}

@Component({
  selector: 'app-advance11',
  templateUrl: './advance11.component.html',
  styleUrls: ['./advance11.component.css'],
})
export class Advance11Component implements OnInit {
  advance11sCollection: AngularFirestoreCollection<Advance11>;
  advance11s: Observable<Advance11[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}
  ngOnInit(): void {
    this.advance11sCollection = this.afs.collection(
      'class11AdvancedTheory',
      (ref) => {
        return ref.orderBy('Number');
      }
    );
    this.advance11s = this.advance11sCollection.valueChanges();
  }
  redirect(topicname: string): void {
    this.router.navigate(['/pdfchapters'], {
      queryParams: { root: 'class11AdvancedTheory', topic: topicname },
    });
  }
}
