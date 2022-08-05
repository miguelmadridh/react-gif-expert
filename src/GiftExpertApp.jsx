import { useState } from 'react'
import { AddCategory,GiftGrid } from './components'

export const GiftExpertApp = () => {
  /*
  9GiFMb9pQCVIqdDedCkxNJQqgwAXX3hX
  */
  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories((arreglo) => [value, ...arreglo])
  }

  return (
    <>
      <h1>Gift expert app</h1>
      <AddCategory onNewAnime={onAddCategory} />
      {

        categories.map(category => {
          return <GiftGrid key={category} categorie={category} />
        })
      }
    </>
  )
}
