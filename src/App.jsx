import { Filters } from './components/Filters'
import books from './books.json'
import ListsBooks from './components/ListsBooks'
import { useMovies } from './hooks/useMovies'

function App() {
  const {data} = useMovies()

  return (
    <main className='bg-black h-full w-full'>
      <span className='flex justify-center text-white'>{books.library.length} libros disponibles</span>
      <Filters books={books} />
      <section className='container mx-auto mt-20'>
        <ListsBooks books={data} />
      </section>
    </main>
  )
}

export default App
