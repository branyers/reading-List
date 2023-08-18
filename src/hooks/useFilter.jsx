import React, { useContext } from 'react'
import { FiltersProvider } from '../Context/filterContext'

export const useFilter = () => {
  const context = useContext(FiltersProvider)
  console.log(context)
  if(!context) {
    throw Error ("The provider must be whithin main component")
  }
  return context
}

