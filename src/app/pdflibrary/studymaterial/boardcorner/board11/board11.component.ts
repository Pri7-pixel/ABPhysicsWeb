import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface Board11 {
  image: string;
  name: string;
  Number: string;
}

@Component({
  selector: 'app-board11',
  templateUrl: './board11.component.html',
  styleUrls: ['./board11.component.css'],
})
export class Board11Component implements OnInit {
  board11sCollection: AngularFirestoreCollection<Board11>;
  board11s: Observable<Board11[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}
  ngOnInit(): void {
    this.board11sCollection = this.afs.collection(
      'class11BoardCorner',
      (ref) => {
        return ref.orderBy('Number');
      }
    );
    this.board11s = this.board11sCollection.valueChanges();
  }
  redirect(topicname: string): void {
    this.router.navigate(['/pdfchapters'], {
      queryParams: { root: 'class11BoardCorner', topic: topicname },
    });
  }
}
