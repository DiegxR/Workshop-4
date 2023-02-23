import React, { useState, useEffect } from 'react'
import './styles.scss'
import Moon from '../../../assets/destination/image-moon.png'
import Europa from '../../../assets/destination/image-europa.png'
import Titan from '../../../assets/destination/image-titan.png'
import Mars from '../../../assets/destination/image-mars.png'

const ImgPlace = ({src}) => {
    const [Img, setImg] = useState('')
    useEffect(() => {
        setImg(selectImg(src))
    }, [src])
    
    const selectImg = (data) =>{
        switch (data) {
            case "Moon":
                return Moon
            break;
            case "Europa":
                return Europa
            break;
            case "Titan":
                return Titan
            break;
            case "Mars":
                return Mars
            break;
        
            default:
                break;
        }
    }
  return (
    <div className='imgContainer'>
        <img src={Img}></img>
    </div>
  )
}

export default ImgPlace