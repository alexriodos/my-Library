import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookRegistrationComponent } from './book-registration/book-registration.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'register-book', component: BookRegistrationComponent},
  { path: 'detail-book', component: BookDetailComponent },
  //{ path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    BookRegistrationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
