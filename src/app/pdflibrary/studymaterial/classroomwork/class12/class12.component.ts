import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

interface Class12 {
  image: string;
  name: string;
  pdf: string;
}

@Component({
  selector: 'app-class12',
  templateUrl: './class12.component.html',
  styleUrls: ['./class12.component.css'],
})
export class Class12Component implements OnInit {
  class12sCollection: AngularFirestoreCollection<Class12>;
  class12s: Observable<Class12[]>;

  constructor(private afs: AngularFirestore, private router: Router) {}

  ngOnInit(): void {
    this.class12sCollection = this.afs.collection('class12PDF');
    this.class12s = this.class12sCollection.valueChanges();
  }
  launchpdf(pdflink: string): void {
    this.router.navigate(['/pdfviewer'], {
      queryParams: { link: pdflink },
    });
  }
}
