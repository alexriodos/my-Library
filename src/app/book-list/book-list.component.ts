
import { Component, EventEmitter,Input,Output,OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Logger } from 'src/app/services/logger.services';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model'; 

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [Logger]
})

export class BookListComponent implements OnInit {
  title="Lista de libros"
  books: Book[] = []

  constructor(
    private logger: Logger, 
    private alert: AlertService,
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      response => this.books = Object.values(response)
    )
  }

  selectBook(book: Book){
    this.bookService.setSelectedBook(book)
    const message = "Se ha seleccionado el libro "+book.name
    this.logger.log(message)
    this.alert.showAlert(message)
  }
}