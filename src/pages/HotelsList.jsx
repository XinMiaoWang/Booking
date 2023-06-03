import React, { useState }from "react";
import Narbar from "../components/Navbar";
import * as locales from 'react-date-range/dist/locale';
import { DateRange } from "react-date-range";
import format from 'date-fns/format';
import SearchItem from "../components/SearchItem";
import { useLocation } from "react-router-dom";

import './hotelsList.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';



const HotelsList = () => {
    const location = useLocation();
    console.log(location);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [openConditions, setOpenConditions] = useState(false);

    const [destination, setDestination] = useState(location.state?.destination);
    const [conditions, setConditions] = useState(location.state?.conditions);
    const [dates, setDates] = useState(location.state?.dates);

    const handleCounter = (name, sign) => {
        setConditions( prev => {
            return {
                ...prev,
                [name]: (sign==='increase') ? conditions[name]+1 : conditions[name]-1
            }
        })
    }

    return (
        <div className="div">
            <Narbar />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <div className="searchTitle">搜尋</div>
                        {/* 地址 搜尋欄 */}
                        <div className="listItem">
                            <label>目的地/住宿名稱:</label>
                            <input type="text" className="searchInput" 
                            placeholder={ (destination==="") ? "要去哪裡?" : destination }
                            onChange={ (e) => setDestination(e.target.value) }
                            />
                        </div>
                        {/* 日期 搜尋欄 */}
                        <div className="listItem">
                            <label>入住/退房日期 { format(dates[0].startDate, "MM/dd/yyyy")} - {format(dates[0].endDate, "MM/dd/yyyy")}</label>
                            <span className="dates">
                                <div className="searchInput" onClick={ () => setOpenCalendar(!openCalendar)} >
                                    入住時間 - 退房時間
                                </div>
                                {
                                    openCalendar && <DateRange 
                                        className="date"
                                        editableDateInputs={true}
                                        minDate={new Date()}
                                        moveRangeOnFirstSelection={false}
                                        onChange={(item) => setDates([item.selection])}
                                        ranges={dates}
                                        locale={locales['zhTW']}
                                    />
                                }
                            </span>
                        </div>
                        <div className="listItem">
                             {/* 最低價格 搜尋欄 */}
                            <div className="listItemLimitPrice">
                                <span className="limitTitle" >每晚最低價格</span>
                                <input type="text" className="searchInput" />
                            </div>
                             {/* 最高價格 搜尋欄 */}
                            <div className="listItemLimitPrice">
                                <span className="limitTitle" >每晚最高價格</span>
                                <input type="text" className="searchInput" />
                            </div>
                             {/* conditions 搜尋欄 */}
                             <div className="listItemConditions">
                                <span className="SearchText" onClick={ () => setOpenConditions(!openConditions)}>
                                    {conditions.adult} 位成人，{conditions.children} 位小孩，{conditions.room} 間房
                                </span>
                                {
                                    openConditions &&
                                    <div className="conditionsContainer">
                                        <div className="condition">
                                            成人
                                            <div className="conditionCounter">
                                                <button className="conditionCounterButton" 
                                                    onClick={ () => handleCounter("adult", "decrease")}
                                                    disabled={conditions.adult <= 1}
                                                >
                                                    -
                                                </button>
                                                <span className="number">{conditions.adult}</span>
                                                <button className="conditionCounterButton" onClick={ () => handleCounter("adult", "increase")}>+</button>
                                            </div>
                                        </div>
                                        <div className="condition">
                                            <span>小孩
                                                <p>0-17 歲</p>
                                            </span>
                                            <div className="conditionCounter">
                                                <button className="conditionCounterButton" 
                                                    onClick={ () => handleCounter("children", "decrease")}
                                                    disabled={conditions.children <= 0}
                                                >
                                                    -
                                                </button>
                                                <span className="number">{conditions.children}</span>
                                                <button className="conditionCounterButton" onClick={ () => handleCounter("children", "increase")}>+</button>
                                            </div>
                                        </div>
                                        <div className="condition">
                                            房間
                                            <div className="conditionCounter">
                                                <button className="conditionCounterButton" 
                                                    onClick={ () => handleCounter("room", "decrease")}
                                                    disabled={conditions.room <= 1}
                                                >
                                                    -
                                                </button>
                                                <span className="number">{conditions.room}</span>
                                                <button className="conditionCounterButton" onClick={ () => handleCounter("room", "increase")}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                             </div>
                        </div>
                        {/* 搜尋按鈕 */}
                        <div className="listItem">
                            <button className="searchBtn" >搜尋</button>
                        </div>
                    </div>
                    <div className="listResult">
                        <SearchItem active="active"/>
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelsList;