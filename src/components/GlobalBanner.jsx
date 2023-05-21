import React from 'react'

import "./globalBanner.scss"

const GlobalBanner = () => {
    return (
        <div className="announcement">
            <div className="container">
                <div className="GlobalBanner">
                    <img src="https://cf.bstatic.com/static/img/genius-globe-with-badge_desktop@2x/1f5a273d871549f00bf6692f7ff612b5e8eda038.png" alt="" />
                    <div className="BannerInfoDes">
                        <h2>優惠立即享</h2>
                        <span>登入您的 Booking.com 帳戶，尋找藍色的 Genius 圖標，輕鬆省一筆，鐵人挑戰後面會越來越難，加油！</span>
                        <div className="Bannerbtn">
                            <button>登入</button>
                            <button>註冊</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GlobalBanner;