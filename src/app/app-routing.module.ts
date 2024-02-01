import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AskyourdoubtComponent } from './askyourdoubt/askyourdoubt.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignmentComponent } from './pdflibrary/assignment/assignment.component';
import { PdflibraryComponent } from './pdflibrary/pdflibrary.component';
import { AdvancedtheoryComponent } from './pdflibrary/studymaterial/advancedtheory/advancedtheory.component';
import { BoardcornerComponent } from './pdflibrary/studymaterial/boardcorner/boardcorner.component';
import { ClassroomworkComponent } from './pdflibrary/studymaterial/classroomwork/classroomwork.component';
import { StudymaterialComponent } from './pdflibrary/studymaterial/studymaterial.component';
import { FoundationComponent } from './videolibrary/foundation/foundation.component';
import { JEENEETComponent } from './videolibrary/jee-neet/jee-neet.component';
import { SpecialvideosComponent } from './videolibrary/specialvideos/specialvideos.component';
import { VideolibraryComponent } from './videolibrary/videolibrary.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { PdfchaptersComponent } from './pdfchapters/pdfchapters.component';
import { VideochaptersComponent } from './videochapters/videochapters.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'pdfchapters',
    component: PdfchaptersComponent,
  },
  {
    path: 'videochapters',
    component: VideochaptersComponent,
  },
  {
    path: 'videolibrary',
    component: VideolibraryComponent,
  },
  {
    path: 'videolibrary/foundation',
    component: FoundationComponent,
  },
  {
    path: 'videolibrary/JEE-NEET',
    component: JEENEETComponent,
  },
  {
    path: 'videolibrary/specialvideos',
    component: SpecialvideosComponent,
  },
  {
    path: 'videoplayer',
    component: VideoplayerComponent,
  },
  {
    path: 'pdfviewer',
    component: PdfviewerComponent,
  },
  {
    path: 'pdflibrary',
    component: PdflibraryComponent,
  },
  {
    path: 'pdflibrary/studymaterial',
    component: StudymaterialComponent,
  },
  {
    path: 'pdflibrary/assignment',
    component: AssignmentComponent,
  },
  {
    path: 'pdflibrary/studymaterial/boardcorner',
    component: BoardcornerComponent,
  },
  {
    path: 'pdflibrary/studymaterial/advancedtheory',
    component: AdvancedtheoryComponent,
  },
  {
    path: 'pdflibrary/studymaterial/classroomwork',
    component: ClassroomworkComponent,
  },
  {
    path: 'askyourdoubt',
    component: AskyourdoubtComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
