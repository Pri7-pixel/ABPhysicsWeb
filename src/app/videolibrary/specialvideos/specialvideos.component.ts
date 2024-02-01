import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface Special {
  image: string;
  name: string;
  Number: string;
}

@Component({
  selector: 'app-specialvideos',
  templateUrl: './specialvideos.component.html',
  styleUrls: ['./specialvideos.component.css'],
})
export class SpecialvideosComponent implements OnInit {
  specialsCollection: AngularFirestoreCollection<Special>;
  specials: Observable<Special[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}

  ngOnInit(): void {
    this.specialsCollection = this.afs.collection('specialChapter', (ref) => {
      return ref.orderBy('Number');
    });
    this.specials = this.specialsCollection.valueChanges();
  }
  redirect(topicname: string): void {
    this.router.navigate(['/videochapters'], {
      queryParams: { root: 'specialChapter', topic: topicname },
    });
  }
}
