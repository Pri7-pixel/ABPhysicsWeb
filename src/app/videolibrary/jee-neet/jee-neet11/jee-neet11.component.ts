import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface JEENEET11 {
  image: string;
  name: string;
  Number: string;
}

@Component({
  selector: 'app-jee-neet11',
  templateUrl: './jee-neet11.component.html',
  styleUrls: ['./jee-neet11.component.css'],
})
export class JEENEET11Component implements OnInit {
  jeeneet11sCollection: AngularFirestoreCollection<JEENEET11>;
  jeeneet11s: Observable<JEENEET11[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}
  ngOnInit(): void {
    this.jeeneet11sCollection = this.afs.collection('class11Chapter', (ref) => {
      return ref.orderBy('Number');
    });
    this.jeeneet11s = this.jeeneet11sCollection.valueChanges();
  }
  redirect(topicname: string): void {
    this.router.navigate(['/videochapters'], {
      queryParams: { root: 'class11Chapter', topic: topicname },
    });
  }
}
