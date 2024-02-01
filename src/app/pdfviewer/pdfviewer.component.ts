import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css'],
})
export class PdfviewerComponent implements OnInit {
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  link: string;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.link = params['link'];
    });
    var str = '#toolbar=0';
    this.link = this.link.concat(str.toString());
  }

  pdfURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }
}
