import React, { Component } from 'react'
// import connect from '@connect'
import * as HomeStyled from '@pages/home/styledComponent' 
import HeaderContainer from '@common/header/HeaderContainer'
import SwiperContainer from '@common/swiper/SwiperContainer'
import NavBoxContainer from '@common/nav-box/NavBoxContainer'
import BetterScrollContainer from '@common/better-scroll/BetterScrollContainer'

class HomeContainer extends Component{
     state = {
        
      }
      render() {
        return (
            <div>
              {/* <HeaderContainer /> */}
              <SwiperContainer />
              <NavBoxContainer />
              <BetterScrollContainer/>
            </div>
        );
      }
}
export default HomeContainer
