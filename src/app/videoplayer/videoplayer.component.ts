import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css'],
})
export class VideoplayerComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  link: string;
  des: string;
  pic: string;
  name: string;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.link = params['link'];
      this.des = params['des'];
      this.pic = params['pic'];
      this.name = params['name'];
    });
  }
}
