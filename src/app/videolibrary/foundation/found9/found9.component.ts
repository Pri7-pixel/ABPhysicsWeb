import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface Found9 {
  image: string;
  name: string;
  Number: string;
}
@Component({
  selector: 'app-found9',
  templateUrl: './found9.component.html',
  styleUrls: ['./found9.component.css'],
})
export class Found9Component implements OnInit {
  found9sCollection: AngularFirestoreCollection<Found9>;
  found9s: Observable<Found9[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}
  ngOnInit(): void {
    this.found9sCollection = this.afs.collection('class9Chapter', (ref) => {
      return ref.orderBy('Number');
    });
    this.found9s = this.found9sCollection.valueChanges();
  }
  redirect(topicname: string): void {
    this.router.navigate(['/videochapters'], {
      queryParams: { root: 'class9Chapter', topic: topicname },
    });
  }
}
