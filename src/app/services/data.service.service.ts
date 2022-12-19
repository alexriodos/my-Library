import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model'

const URLhost = 'https://fluted-factor-365803-default-rtdb.firebaseio.com'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  saveBooks(books: Book[]){
    this.httpClient.put(URLhost+'/data.json', books)
      .subscribe(
        response => console.log(response)
      )
  }

  getBooks(){
    return this.httpClient.get(URLhost+'/data.json')
  }
}