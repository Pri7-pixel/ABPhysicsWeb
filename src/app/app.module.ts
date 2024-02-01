import { Advance12Component } from './pdflibrary/studymaterial/advancedtheory/advance12/advance12.component';
import { Advance11Component } from './pdflibrary/studymaterial/advancedtheory/advance11/advance11.component';
import { Board12Component } from './pdflibrary/studymaterial/boardcorner/board12/board12.component';
import { Board11Component } from './pdflibrary/studymaterial/boardcorner/board11/board11.component';
import { FirebaseService } from './services/firebase/firebase.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LayoutModule } from '@angular/cdk/layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideolibraryComponent } from './videolibrary/videolibrary.component';
import { StudymaterialComponent } from './pdflibrary/studymaterial/studymaterial.component';
import { AskyourdoubtComponent } from './askyourdoubt/askyourdoubt.component';
import { BoardcornerComponent } from './pdflibrary/studymaterial/boardcorner/boardcorner.component';
import { AdvancedtheoryComponent } from './pdflibrary/studymaterial/advancedtheory/advancedtheory.component';
import { ClassroomworkComponent } from './pdflibrary/studymaterial/classroomwork/classroomwork.component';
import { Class11Component } from './pdflibrary/studymaterial/classroomwork/class11/class11.component';
import { Class12Component } from './pdflibrary/studymaterial/classroomwork/class12/class12.component';
import { PdflibraryComponent } from './pdflibrary/pdflibrary.component';
import { AssignmentComponent } from './pdflibrary/assignment/assignment.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FoundationComponent } from './videolibrary/foundation/foundation.component';
import { JEENEETComponent } from './videolibrary/jee-neet/jee-neet.component';
import { SpecialvideosComponent } from './videolibrary/specialvideos/specialvideos.component';
import { ProblemsComponent } from './pdflibrary/assignment/problems/problems.component';
import { SolutionsComponent } from './pdflibrary/assignment/solutions/solutions.component';
import { JEENEET11Component } from './videolibrary/jee-neet/jee-neet11/jee-neet11.component';
import { JEENEET12Component } from './videolibrary/jee-neet/jee-neet12/jee-neet12.component';
import { Found9Component } from './videolibrary/foundation/found9/found9.component';
import { Found10Component } from './videolibrary/foundation/found10/found10.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/loader/interceptor.service';
import { PdfchaptersComponent } from './pdfchapters/pdfchapters.component';
import { VideochaptersComponent } from './videochapters/videochapters.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    VideolibraryComponent,
    StudymaterialComponent,
    AskyourdoubtComponent,
    BoardcornerComponent,
    Board11Component,
    Board12Component,
    AdvancedtheoryComponent,
    Advance11Component,
    Advance12Component,
    ClassroomworkComponent,
    Class11Component,
    Class12Component,
    PdflibraryComponent,
    AssignmentComponent,
    PagenotfoundComponent,
    FoundationComponent,
    JEENEETComponent,
    SpecialvideosComponent,
    ProblemsComponent,
    SolutionsComponent,
    JEENEET11Component,
    JEENEET12Component,
    Found9Component,
    Found10Component,
    VideoplayerComponent,
    PdfviewerComponent,
    PdfchaptersComponent,
    VideochaptersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatMenuModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCf8LvZcFdEotK2xZ4BPdK-RCQidA0K9CI',
      authDomain: 'ab-physics.firebaseapp.com',
      databaseURL:
        'https://ab-physics-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'ab-physics',
      storageBucket: 'ab-physics.appspot.com',
      messagingSenderId: '859465366515',
      appId: '1:859465366515:web:90cd05c02b3e108606b086',
      measurementId: 'G-JPJP5MFQTZ',
    }),
    RouterModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [
    FirebaseService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
