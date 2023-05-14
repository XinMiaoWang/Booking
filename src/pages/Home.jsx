import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Announcement from '../components/Announcement'
import Feature from '../components/Feature'
import Footer from '../components/Footer'

import './home.scss'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Announcement/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default Home