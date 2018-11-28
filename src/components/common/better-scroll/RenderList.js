import React, { Component } from 'react'
// import connect from '@connect'
import * as BetterScrollStyled from '@common/better-scroll/styledComponent' 
import RenderItem from '@common/better-scroll/RenderItem'
import BScroll from 'better-scroll'

class RenderList extends Component{
    constructor(props){
        super(props)
        this.state = {
            homeData:[
                '#content_6',
                '#content_5',
                '#content_7',
                '#content_10'
            ],
           vipData:[
                '#appRecommendList',
                '#coursesTwo',
                '#coursesOne',
            ],
        }
        this.scroll=null
    }
    componentDidMount(){
        let { type } = this.props.data;
        let data = (type==="fineFood" ||　type==="newKitchen") ? this.state.homeData : this.state.vipData;
         data.forEach((item,index)=>{
            this.scroll = new BScroll(item,{
                click:true,
                scrollX:true,
                scrollY:false,
                pullUpLoad: { //配置上拉加载
                    threshold: 50 // 距离底部多少距离
                },
            })
            this.scroll.on('pullingUp', async () => {
                // if ( this.datasource.length < this.pageNum * this.pageSize ) return false
                console.log('获取数据', this.pageNum)
                // 在这个项目中，不需要每次上啦获取数据了
                // this.setItems()
                // this.pageNum ++;
                this.scroll.refresh(); // 重新计算  防止添加之后不滚动
                this.scroll.finishPullUp(); // 解决拉动刷新 通知这次下拉完成 再次请求
            })   
        })
    }
    RenderList(info){   
        let { type,list} = info;
        if(type==="fineFood" ||　type==="newKitchen"){
            return list.map(item=>(
                <div className="recommend-item" key={item.id}>
                    <div className="recommend-item_title">
                        <span>{item.name}</span>
                        <span>查看全部</span>
                    </div>
                    <div className="recommend-item_content" id={"content_"+item.id}>
                        <div className="recommend-item_scroll"  >
                            <RenderItem list={item.appRecommendList} type={type} />
                        </div>
                    </div>
                    
                </div>
            ))
        }else{
            return(
                <div className="recommend-item" >
                    <div className={type==="appRecommendList"?"recommend-item_titleCenter":"recommend-item_title"} >
                        <span>{info.name}</span>
                    </div>
                    <div className="recommend-item_content" id={type}>
                        <div className="recommend-item_scroll"  >
                            <RenderItem list={list} type={type} name={info.name} />
                        </div>
                    </div>
                </div>
            )
        }
        
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
