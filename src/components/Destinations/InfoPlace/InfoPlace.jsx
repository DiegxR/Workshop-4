import React, { useEffect, useState } from 'react'
import './styles.scss'

const InfoPlace = ({ data }) => {
  const [state, setState] = useState(data)

  useEffect(() => {
    setState(data)
  }, [data, state])

  return (
    <>
      <h1>{state.name.toUpperCase()}</h1>
      <p>{state.description}</p>
      <div className='line'></div>
      <div className='info'>
      <section className='section'>
        <h4>AVG. DISTANCE</h4>
        <h2>{state.distance}</h2>
      </section>
      <section className='section'>
        <h4>EST. TRAVEL TIME</h4>
        <h2>{state.travel}</h2>
      </section>
      </div>
    </>
  )
}

export default InfoPlace