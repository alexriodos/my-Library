
import { Component, EventEmitter,Input,Output } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Logger } from 'src/app/services/logger.services';
import { Book } from '../models/book.model'; 

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [Logger]
})
export class BookListComponent {
title = "Lista de Libros"
@Input() books: Book[] = []
@Output() selectBookEvent = new EventEmitter<Book>()


constructor(private logger: Logger, private alert: AlertService){}

selectBook(book: Book){
  this.selectBookEvent.emit(book)
  const message = "Se ha seleccionado el libro " + book.name
  this.logger.log(message)
  this.alert.showAlert(message)
  }
}
