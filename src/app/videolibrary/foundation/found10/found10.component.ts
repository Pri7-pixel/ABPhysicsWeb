import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface Found10 {
  image: string;
  name: string;
  Number: string;
}
@Component({
  selector: 'app-found10',
  templateUrl: './found10.component.html',
  styleUrls: ['./found10.component.css'],
})
export class Found10Component implements OnInit {
  found10sCollection: AngularFirestoreCollection<Found10>;
  found10s: Observable<Found10[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}
  ngOnInit(): void {
    this.found10sCollection = this.afs.collection('class10Chapter', (ref) => {
      return ref.orderBy('Number');
    });
    this.found10s = this.found10sCollection.valueChanges();
  }
  redirect(topicname: string): void {
    this.router.navigate(['/videochapters'], {
      queryParams: { root: 'class10Chapter', topic: topicname },
    });
  }
}
