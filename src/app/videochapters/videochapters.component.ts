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
  description: string;
  image: string;
  name: string;
  video: string;
}

@Component({
  selector: 'app-videochapters',
  templateUrl: './videochapters.component.html',
  styleUrls: ['./videochapters.component.css'],
})
export class VideochaptersComponent implements OnInit {
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

  launchvideo(
    videolink: string,
    description: string,
    picture: string,
    name: string
  ): void {
    this.router.navigate(['/videoplayer'], {
      queryParams: {
        link: videolink,
        des: description,
        pic: picture,
        name: name,
      },
    });
  }
}
