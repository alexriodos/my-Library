import { Component } from '@angular/core';
import { Logger } from 'src/app/services/logger.services';
import { Book } from './models/book.model';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logger]
})
export class AppComponent {
  title = 'My Library';
  books:Book[]=[]
  
  selectedBook: Book = this.books[0]

constructor(private logger: Logger, private bookService: BookService){
  this.books = this.bookService.books
}


    setSelectedBook( selectBook: Book){
      this.selectedBook = selectBook
    }

}
