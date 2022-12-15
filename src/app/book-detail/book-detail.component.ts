import { Component,Input } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
title="Detalle de Libro"
@Input() book?: Book
}
