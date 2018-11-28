import React, { Component,Fragment } from 'react'
// import connect from '@connect'
import * as BetterScrollStyled from '@common/better-scroll/styledComponent' 
import NewKitchenContainer from '@common/better-scroll/NewKitchenContainer' 

class BetterScrollContainer extends Component{
    state = {
        list:[]
    }
    componentWillMount(){
        fetch('/mw/app/index/recommendClassifyDetail')
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                list:data.entity.appRecommendClassifyList
            })
            console.log(this.state.list);
        })
    }
    RenderList(){
        let { list } = this.state
        return list.map(item=>(
            <div className="recommend-item" key={item.id}>
                <div className="recommend-item_title">
                    <span>{item.name}</span>
                    <span>查看全部</span>
                </div>
                <div className="recommend-item_content">
                    <div className="recommend-item_scroll"  >
                        {this.RenderItem(item.appRecommendList)}
                    </div>
                </div>
                
            </div>
        ))
    }
    handleName(name){
        switch(name){
            case "星厨课堂": 
            case "线下课程":{
                return{
                    IconHeight:"157.5px",
                    IconWidth:"157.5px"
                }
            }
            case "精选·推荐": {
                return{
                    IconHeight:"202.484px",
                    IconWidth:"337.5px"
                }
            }
            default: {
                return{
                    IconHeight:"219.665px",
                    IconWidth:"157.5px"
                }
            }
        }   
    }
    handleBottomContent(item){
        if(item.classify_name === "星厨课堂" || item.classify_name === "精选·推荐"){
            return(
                <div className="recommend-scroll_text"> {item.name} </div>
            )
        }else if(item.classify_name === "美食生活" || item.classify_name === "秘味光影"){
            return(
                <Fragment>
                <div className="recommed-float">
                    <div className="recommend-scroll_text"> {item.name} </div>
                    <div className="recommend-scroll_icon">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMzdCODY3RjY5MzcxMUU4QTQzREJDQzI0MUVGQzZFRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMzdCODY4MDY5MzcxMUU4QTQzREJDQzI0MUVGQzZFRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzN0I4NjdENjkzNzExRThBNDNEQkNDMjQxRUZDNkVFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAzN0I4NjdFNjkzNzExRThBNDNEQkNDMjQxRUZDNkVFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xwT33QAACZ1JREFUeNrcW31sW1cV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" />
                    </div>
                </div>
                <p className="recommend-info">
                    {item.content}
                </p>
                </Fragment>
                
            )
        }
    }
    RenderItem(list){
        return list.map(item=>(
            <BetterScrollStyled.betterItem className="recommend-scroll_item"  key={item.id} name={this.handleName(item.classify_name)}>
                <img className="recommend-scroll_img" src={(item.image2 && item.classify_name === "精选·推荐") ? item.image2 : (item.classify_name === "精选·推荐" ? item.image : item.image3)} />
                {this.handleBottomContent(item)}
                
            </BetterScrollStyled.betterItem>
            
        ))
    }
    render() {
        return (
            <BetterScrollStyled.betterScroll>
                {this.RenderList()}
                <NewKitchenContainer list = {this.state.list} />
            </BetterScrollStyled.betterScroll>
        );
    }
}
export default BetterScrollContainer
