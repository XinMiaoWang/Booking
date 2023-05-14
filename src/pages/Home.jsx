import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Announcement from '../components/Announcement'
import Feature from '../components/Feature'

import './home.scss'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Announcement/>
      <Feature/>
    </div>
  )
}

export default Home