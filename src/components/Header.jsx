import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

import './header.scss'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale'; //用它來叫出不同版本的語言翻譯，把日曆換成中文
import { DateRange } from 'react-date-range';

import format from 'date-fns/format';

const Header = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dates, setDates] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }]);

  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">尋找下趟住宿</h1>
        <p className="headerDes">
          搜尋飯店、民宿及其他住宿類型的優惠…
          <br/>
          Booking.com clone挑戰（為SamKo Demo使用不為盈利）
        </p>
        <div className="headerSearchBar">
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faBed} />
            <input type="Search" placeholder='你要去哪裡？' className='SearchInput' />
          </div>
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faCalendar} onClick={ () => setOpenCalendar(!openCalendar) }/>
            <span className='SearchText'  onClick={ () => setOpenCalendar(!openCalendar) }>
              {format(dates[0].startDate, "MM/dd/yyyy")} - {format(dates[0].endDate, "MM/dd/yyyy")}
            </span>
            {
              openCalendar && 
              <DateRange
                className="calendar"
                editableDateInputs={true} // 讓日期可被選取、輸入
                moveRangeOnFirstSelection={false}
                onChange={ (item) => setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
                locale={locales['zhTW']} // 語言使用繁體中文
              />
            }
          </div>
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <span className='SearchText' >3位成人 · 2 位小孩 · 1 間房</span>
          </div>
          <div className="SearchBarBtn">搜尋</div>
        </div>
      </div>
    </div>
  )
}

export default Header