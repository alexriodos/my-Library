import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    new Book('Libro1','Autor1','Genero1',1801,"" ),
    new Book('Libro2','Autor2','Genero2',1802,"" ),
    new Book('Libro3','Autor3','Genero3',1803,"" ),

  ]

  constructor() { }

    createBook(newBook: Book) {
     this.books.push(newBook)
    //this.logger.log("Se ha creado un libro!") 
    }

}
