import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faToriiGate, faTaxi } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbarContainer">
        <div className="lineOne">
          <div className="left">
            <Link to="/" className="logo">SAM.BOOKING</Link>
          </div>
          <div className="right">
            <div className="navButtonFlag"></div>
            <div className="navButtonNotif">使用webpack測試</div>
            <div className="navButton">註冊</div>
            <div className="navButton">登入</div>
          </div>
        </div>
        <div className="lineTwo">
          <div className="item active">
            <FontAwesomeIcon icon={faBed} />
            <span>住宿</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faPlane} />
            <span>航班</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faCar} />
            <span>租車</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faToriiGate} />
            <span>景點/活動</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>機場計程車</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar