import React from 'react'
import './style.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className='texts'>
        <p className='firstText'>SO, YOU WANT TO TRAVEL TO</p>
        <p className='secondText'>SPACE</p>
        <p className='thirdText'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we´ll give you a truly out of this world experience!</p>
      </div>
      <button className='explore'>EXPLORE</button>
    </section>
  )
}

export default Home