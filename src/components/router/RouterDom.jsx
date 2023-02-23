import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App/App'
import Crew from '../crew/Crew'
import Destinations from '../Destinations/Destinations'
import Home from '../Home/Home'
import Technology from '../technology/Technology'
const RouterDom = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path='home' element={<Home/>}/>
                <Route path="crew" element={<Crew/>}/>
                <Route path="destinations/" element={<Destinations/>}/>
                <Route path="technology" element={<Technology/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterDom