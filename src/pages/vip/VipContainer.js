import React, { Component } from 'react'

// import connect from '@connect'
import * as VipStyled from '@pages/vip/styledComponent'
import HeaderContainer from '@common/header/HeaderContainer'
import SwiperContainer from '@common/swiper/SwiperContainer'
import NavContainer from '@pages/vip/NavContainer'
import BetterScrollContainer from '@common/better-scroll/BetterScrollContainer'
import _ from 'lodash'
class VipContainer extends Component {
    constructor(){
        super()
        this.state = {
            swiper: {
                width: 1,
                cellSpacing: 0,
                top:10,
                imgHeight: 178,
                compressHeight:178,
                marginTop:0,
                marginBottom:0,
                fetch: '/mw/app/index/banner?KeyWord=vip',
            },
            betterScroll:{
                fetch: '/mw/app/vip/index/course?type=3&pageSize=7',
            },
            navData:[]
            
        }
        this.x = [];
        this.list={
            appRecommendList:[],
            coursesOne:[],
            coursesTwo:[],
        }
    }
   
   async componentDidMount(){
        await fetch('/mw/app/vip/index/course?type=3&pageSize=7')
        .then((res)=>res.json())
        .then((data)=>{      
            this.list.appRecommendList = data.entity.appRecommendList;
        })
        await fetch('/mw/app/vip/index/course/order?type=1')
        .then((res)=>res.json())
        .then((data)=>{
            this.list.coursesOne = data.entity.courses;
        })

        await  fetch('/mw/app/vip/index/course/order?type=2')
        .then((res)=>res.json())
        .then((data)=>{
            this.list.coursesTwo = data.entity.courses;
        })
        
        this.setState({
            navData:[
                {
                    list:this.list.appRecommendList,
                    name:'VIP精选推荐',
                    type:'appRecommendList'
                },
                {
                    list:this.list.coursesTwo,
                    name:'热搜榜',
                    type:'coursesTwo'
                },
                {
                    list:this.list.coursesOne,
                    name:'新菜榜',
                    type:'coursesOne'
                    
                }
               
            ]
        })
    }
    render() {
        return (
            <VipStyled.vip>
                {/* <HeaderContainer /> */}
                <SwiperContainer setData={this.state.swiper} />
                <NavContainer />
                <BetterScrollContainer setData = {this.state.navData}/>
            </VipStyled.vip>
        );
    }
}
export default VipContainer