import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface Class11 {
  image: string;
  name: string;
  pdf: string;
}

@Component({
  selector: 'app-class11',
  templateUrl: './class11.component.html',
  styleUrls: ['./class11.component.css'],
})
export class Class11Component implements OnInit {
  class11sCollection: AngularFirestoreCollection<Class11>;
  class11s: Observable<Class11[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}

  ngOnInit(): void {
    this.class11sCollection = this.afs.collection('class11PDF');
    this.class11s = this.class11sCollection.valueChanges();
  }
  launchpdf(pdflink: string): void {
    this.router.navigate(['/pdfviewer'], {
      queryParams: { link: pdflink },
    });
  }
}
