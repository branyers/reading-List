import React, { useState, useContext } from 'react'
import { getUniqueGenres } from '../services/bookService'


export const Filters = ({ books }) => {
  const [optionSelected, setOptionSelected] = useState('')


  const handleFilterByGenre = (e) => {
   
  }

  return (
    <section className='flex justify-center items-center mt-20 gap-40'>
      <div>
        <div>
          <label className='text-white' htmlFor="">Filtrar por Paginas</label>
        </div>
        <input type="range" name="" id="" />
      </div>
      <div>
        <div>
          <label className='text-white' htmlFor="">Filtrar por Genero</label>
        </div>
        <select name="" id="" onChange={handleFilterByGenre}>
          <option value="">Todos</option>
          {getUniqueGenres(books.library).map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}

