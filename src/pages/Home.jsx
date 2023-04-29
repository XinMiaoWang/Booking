import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Announcement from '../components/Announcement'

import './home.scss'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Announcement/>
    </div>
  )
}

export default Home