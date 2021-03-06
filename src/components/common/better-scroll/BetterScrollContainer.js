import React, { Component,Fragment } from 'react'
// import connect from '@connect'
import * as BetterScrollStyled from '@common/better-scroll/styledComponent' 
import RenderList from '@common/better-scroll/RenderList'
import uuid from 'uuid'

class BetterScrollContainer extends Component{
    constructor(props){
        super(props)
    }
    renderList(){
        let { setData } = this.props;
        // console.log(this.props);
        if(setData){
            // console.log(uuid())
            return setData.map(item=>(
                <RenderList data={item} key={uuid()} />
            ))
        }
    } 
    render() {
        
        // console.log(document.querySelector("#content_6"))
        return (
            <Fragment>
                {this.renderList()}
            </Fragment>
          
        );
    }
}
export default BetterScrollContainer
