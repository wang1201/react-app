import React, { Component,Fragment } from 'react'
// import connect from '@connect'
import * as BetterScrollStyled from '@common/better-scroll/styledComponent' 
import RenderList from '@common/vip-better-scroll/RenderList'
import uuid from 'uuid'
class BetterScrollContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:this.props.setData,
        }
    }
    // componentWillReceiveProps(props){
    //     console.log(props);
    //     this.setState =( {
    //         data:1
    //     })
    // }
    renderList(){
        console.log(this.props.setData);
        let { setData} = this.props;
        if(setData){
            return setData.map(item=>(
                <RenderList data={item} key={uuid()} />
            ))
        }
    } 
    render() {
        return (
            <Fragment>
                {this.renderList()}
            </Fragment>
          
        );
    }
}
export default BetterScrollContainer
