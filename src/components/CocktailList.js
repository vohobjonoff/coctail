import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { coctails, loading } = useGlobalContext();

  if (loading) {
  return <Loading />
  }
  
  if (coctails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktail found here please try again later
      </h2>
    )
  }

  return (
    <section className='section'>
    <h2 className='section-title'>cocktails</h2>
    <div className='cocktails-center'>
      {coctails.map((item) => {
        return <Cocktail key={item.id} {...item} />
      })}
    </div>
  </section>
  )
}

export default CocktailList
