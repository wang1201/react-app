import React, { Component } from 'react'
// import connect from '@connect'
import * as BetterScrollStyled from '@common/better-scroll/styledComponent' 
import RenderItem from '@common/vip-better-scroll/RenderItem'

class RenderList extends Component{
    constructor(props){
        super(props)
    }
    RenderList(info){   
        console.log('33333333',info);    
        return(
            <div className="recommend-item" >
                <div className="recommend-item_title">
                    <span>{info.name}</span>
                </div>
                <div className="recommend-item_content">
                    <div className="recommend-item_scroll"  >
                        <RenderItem list={info.list} type={info.type} name={info.name} />
                    </div>
                </div>
            </div>
        )
    }
    render() {
        let { data : info } = this.props;
        return ( 
            <BetterScrollStyled.betterScroll>
                {this.RenderList(info)}
            </BetterScrollStyled.betterScroll>
        );
    }
} 
export default RenderList
