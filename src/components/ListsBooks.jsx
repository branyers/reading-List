import React from 'react'

const ListsBooks = ({ books }) => {
  return (
    <article className='grid md:grid-cols-3 gap-4'>

      {books && books.map((book) => (
        <div className='' key={book.id}>
          <div className='flex flex-col items-center w-full h-full'>
            <div className='w-3/4 h-full bg-red-600 relative'>
              <div className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-0 transition-opacity duration-300 hover:opacity-90 ">
                <div className=' w-full h-full flex flex-col justify-center items-center'>
                  <button className='flex gap-2 font-bold rounded-md p-4 bg-green-500'>Add to Reading List
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </button>
                  <div className='w-3/4 mt-10'>
                    <p className='text-white'><span className='font-bold'>Synopsis: </span>{book.synopsis}</p>
                  </div>
                </div>
              </div>
              <img className='w-full h-full border border-red-500' src={book.image} alt={book.title} />
            </div>
            <div className='flex flex-col w-3/4 my-1'>
              <p className='text-white'><span className='font-bold'>Title: </span>{book.title}</p>
              <p className='text-white'><span className='font-bold'>Genere: </span>{book.genre}</p>
              <p className='text-white'><span className='font-bold'>Pages: </span>{book.pages}</p>
            </div>
          </div>
        </div>
      )) }
    </article>
  )
}

export default ListsBooks