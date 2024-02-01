import { LoaderService } from './../services/loader/loader.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  @Output() isLogout = new EventEmitter<void>();
  constructor(
    private breakpointObserver: BreakpointObserver,
    public firebaseService: FirebaseService,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {}
  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }
}
