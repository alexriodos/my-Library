export class Book {
    name: string 
    author: string 
    genre: string 
    publishedYear?: number
    description?: string

constructor(

    name: string,
    author: string ,
    genre: string ,
    publishedYear: number,
    description: string
){
    this.name = name
    
    this.author = author
    this.genre=  genre
    this.publishedYear = publishedYear
    this.description = description
}

}