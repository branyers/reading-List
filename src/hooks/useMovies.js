import books from '../books.json'


export function useMovies() {
const { library } = books;
const book = library;


const mappedBooks = book?.map(({book}) => ({
        id: book.ISBN,
        title: book.title,
        year: book.year,
        image: book.cover,
        pages: book.pages,
        synopsis: book.synopsis,
        genre: book.genre,
}))





    return { data: mappedBooks }

}

