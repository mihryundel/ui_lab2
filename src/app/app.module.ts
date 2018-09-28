import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesComponent} from './components/categories/categories.component';
import {PartiesComponent} from './components/parties/parties.component';

import {RouterModule, Routes} from '@angular/router';
import {CreateCategoryComponent} from './components/categories/create-category/create-category.component';
import {FormsModule} from '@angular/forms';
import {DeleteCategoryDialogComponent} from './components/categories/delete-category-dialog/delete-category-dialog.component';
import {EditCategoryComponent} from './components/categories/edit-category/edit-category.component';
import {CreatePartyComponent} from './components/parties/create-party/create-party.component';
import {DeletePartyDialogComponent} from './components/parties/delete-party-dialog/delete-party-dialog.component';
import {EditPartyComponent} from './components/parties/edit-party/edit-party.component';

const appRoutes: Routes = [
  {path: 'parties', component: PartiesComponent},
  {path: 'create-party', component: CreatePartyComponent},
  {path: 'edit-party/:id', component: EditPartyComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'create-category', component: CreateCategoryComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent},


  {
    path: '',
    redirectTo: '/parties',
    pathMatch: 'full'
  },

  {path: '**', component: PartiesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    PartiesComponent,
    CreateCategoryComponent,
    DeleteCategoryDialogComponent,
    EditCategoryComponent,
    CreatePartyComponent,
    DeletePartyDialogComponent,
    EditPartyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteCategoryDialogComponent, DeletePartyDialogComponent]
})
export class AppModule { }
