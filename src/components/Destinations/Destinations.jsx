import React, {useEffect, useState} from 'react'
import './styles.scss'
import { getDestinations } from '../../Services/getData'
import ImgPlace from './ImgPlace/ImgPlace'
import InfoPlace from './InfoPlace/InfoPlace'

const Destinations = () => {
    const [click, setClick] = useState('Moon')
    const [filter, setFilter] = useState([])
    const [places, setPlaces] = useState([])
    useEffect(()=>{
        getDestinations().then((res)=>{
            setPlaces(res)
            const fil = res.filter((item)=> item.name == click)
            setFilter(fil)
        });
    },[])
 
    useEffect(() => {
        let arrayfilter = places.filter((item)=> item.name === click)
        setFilter(arrayfilter)
    }, [click])
    useEffect(() => {
     console.log(filter)
    }, [filter])
    
    const handleClick = ({target})=>{
        setClick(target.getAttribute('data-name'))
        console.log(target.getAttribute('data-name'))
    }

  return (
    <section className='destinations'>
        <div className='destinations__img'>
        <h5 className='destinations__title'><span>01</span> PICK YOUR DESTINATION</h5>
        <ImgPlace src={click} />
        </div>
        <article className='navInfo'>
        <nav className='destinations__nav'>
           {places.map((elem, ind)=>(
            <li key={ind} id={elem.name == click ? 'active' : ''} onClick={e=> handleClick(e)} data-name={elem.name}>{elem.name.toUpperCase()}</li>
           ))}
        </nav>
        {filter.length !== 0 ? <InfoPlace data={filter[0]}/> : ''}
        </article>
    </section>
  )
}

export default Destinations;
