import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Announcement from '../components/Announcement'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import GlobalBanner from '../components/GlobalBanner'


import './home.scss'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Announcement/>
      <Feature/>
      <GlobalBanner/ >
      <Footer/>
    </div>
  )
}

export default Home