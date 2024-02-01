import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface Board12 {
  image: string;
  name: string;
  Number: string;
}

@Component({
  selector: 'app-board12',
  templateUrl: './board12.component.html',
  styleUrls: ['./board12.component.css'],
})
export class Board12Component implements OnInit {
  board12sCollection: AngularFirestoreCollection<Board12>;
  board12s: Observable<Board12[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}
  ngOnInit(): void {
    this.board12sCollection = this.afs.collection(
      'class12BoardCorner',
      (ref) => {
        return ref.orderBy('Number');
      }
    );
    this.board12s = this.board12sCollection.valueChanges();
  }
  redirect(topicname: string): void {
    this.router.navigate(['/pdfchapters'], {
      queryParams: { root: 'class12BoardCorner', topic: topicname },
    });
  }
}
