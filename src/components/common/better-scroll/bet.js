import React, { Component } from 'react'
// import connect from '@connect'
import * as BetterScrollStyled from '@common/better-scroll/styledComponent' 
import NewKitchenContainer from '@common/better-scroll/NewKitchenContainer'
class BetterScrollContainer extends Component{
    state = {
        list:[],
        newKitchen:[],
        fineFood:[]
    }
    async componentWillMount(){
       await fetch('/mw/app/index/recommendClassifyDetail')
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                list:data.entity.appRecommendClassifyList,
                newKitchen:data.entity.appRecommendClassifyList.slice(0,2),
                fineFood:data.entity.appRecommendClassifyList.slice(2,4),
            })
            // console.log(this.state.newKitchen,this.state.fineFood);
        })
    }

    render() {
        console.log(this.state.newKitchen);
        return (
            <NewKitchenContainer list= {this.state.newKitchen}/>
        );
    }
}
export default BetterScrollContainer
