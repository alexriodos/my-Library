import { Component,EventEmitter,Output } from '@angular/core';
import { Book } from '../models/book.model';
import { AlertService } from '../services/alert.service'
import { BookService } from '../services/book.service'

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent {
title = "Registrar Libro"  
@Output() createBookEvent= new  EventEmitter<Book>()
inputName: string = ""
inputAuthor: string = ""
inputGenre: string = ""
inputYear: number= 0
inputDescription: string = ""

constructor(
  private alertService: AlertService,
  private bookService: BookService 
){}

addBook(){
  const newBook = new Book(
    this.inputName,
    this.inputAuthor,
    this.inputGenre,
    this.inputYear,
    this.inputDescription
  )
  this.bookService.createBook(newBook)
  this.alertService.showAlert("Se ha creado un nuevo libro: "+newBook.name)
}

}
