import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';

interface Chapter {
  image: string;
  name: string;
  pdf: string;
}

@Component({
  selector: 'app-pdfchapters',
  templateUrl: './pdfchapters.component.html',
  styleUrls: ['./pdfchapters.component.css'],
})
export class PdfchaptersComponent implements OnInit {
  chaptersCollection: AngularFirestoreCollection<Chapter>;
  chapters: Observable<Chapter[]>;

  topic: string;
  parent: string;
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.topic = params['topic'];
      this.parent = params['root'];
    });

    this.chaptersCollection = this.afs
      .collection(this.parent)
      .doc(this.topic)
      .collection(this.topic);
    this.chapters = this.chaptersCollection.valueChanges();
  }

  launchpdf(pdflink: string): void {
    this.router.navigate(['/pdfviewer'], {
      queryParams: { link: pdflink },
    });
  }
}
