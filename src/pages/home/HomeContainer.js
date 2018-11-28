import React, { Component } from 'react'
// import connect from '@connect'
import * as HomeStyled from '@pages/home/styledComponent'
import HeaderContainer from '@common/header/HeaderContainer'
import SwiperContainer from '@common/swiper/SwiperContainer'
import NavBoxContainer from '@common/nav-box/NavBoxContainer'
import BetterScrollContainer from '@common/better-scroll/BetterScrollContainer'

class HomeContainer extends Component {
  constructor(){
      super()
      this.state = {
        data:[],
        swiper: {
          width: 0.92,
          cellSpacing: 3,
          top:10,
          imgHeight: 164,
          compressHeight:150,
          marginTop:7,
          marginBottom:7,
          fetch: '/mw/app/index/banner',
        },
      }
      this.list = []
  }
  async componentDidMount(){
    await fetch('/mw/app/index/recommendClassifyDetail')
      .then((res)=>res.json())
      .then((data)=>{
          this.list = data.entity.appRecommendClassifyList;
          // this.getData();
      })
      this.setState({
        data:[
            {
                list:this.list.slice(0,2),
                type:'newKitchen'
            },{
                list:this.list.slice(2,4),
                type:'fineFood'
            }
        ],
    })
  }
  render() {
    return (
      <HomeStyled.home>
        {/* <HeaderContainer /> */}
        <SwiperContainer setData={this.state.swiper} />
        <NavBoxContainer />
        <BetterScrollContainer setData = {this.state.data}/>
      </HomeStyled.home>
    );
  }
}
export default HomeContainer
