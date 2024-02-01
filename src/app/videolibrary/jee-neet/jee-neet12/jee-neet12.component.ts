import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface JEENEET12 {
  image: string;
  name: string;
  Number: string;
}
@Component({
  selector: 'app-jee-neet12',
  templateUrl: './jee-neet12.component.html',
  styleUrls: ['./jee-neet12.component.css'],
})
export class JEENEET12Component implements OnInit {
  jeeneet12sCollection: AngularFirestoreCollection<JEENEET12>;
  jeeneet12s: Observable<JEENEET12[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}
  ngOnInit(): void {
    this.jeeneet12sCollection = this.afs.collection('class12Chapter', (ref) => {
      return ref.orderBy('Number');
    });
    this.jeeneet12s = this.jeeneet12sCollection.valueChanges();
  }
  redirect(topicname: string): void {
    this.router.navigate(['/videochapters'], {
      queryParams: { root: 'class12Chapter', topic: topicname },
    });
  }
}
