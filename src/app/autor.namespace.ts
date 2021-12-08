export namespace AutorNamespace {
    export interface Autor {
        name: string,
        lastname: string,
        id: string,
        birthday: Date,
        books: Array<Book>,
        selectedGenre: string
 }

    export interface Book {
        title: string,
        year: Date,
        genre: string,
        autor: string,
         
    }
}