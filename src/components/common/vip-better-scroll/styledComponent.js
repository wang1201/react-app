import styled from 'styled-components'

export const betterScroll = styled.div `
    .recommend-item{
        padding: 0 .266667rem;
        font-size: .373333rem;
        margin-bottom: .8rem;
        .recommend-item_title{
            display: flex;
            justify-content: space-between;
            color: #fff;
            margin-bottom: .266667rem;
            line-height: 1;
            span{
                font-size: .426667rem;
            }
        }
        .recommend-item_content{
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            .recommend-item_scroll{
                overflow: hidden;
                overflow-x: scroll;
                white-space: nowrap;
                .recommend-scroll_item{        
                    display: inline-block;
                    margin-right: .266667rem;
                    color: #fff;
                    position: relative;
                    .recommend-scroll_img{
                        width: 100%;
                        height: 100%;
                        display: block;
                        border-radius: .16rem;
                    }
                    .recommed-float{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        display:flex;
                        display: flex;
                        height: 40px;
                        justify-content: space-between;
                        align-items:center;
                        .recommend-scroll_text{
                          
                        }
                        .recommend-scroll_icon{
                            height:20px;
                            text-align: center;
                            padding-right:.213333rem;
                            padding-top:3px;
                            img{
                                height:100%;
                            }
                        }
                    }
                    .recommend-info{
                        color: #fff;
                        line-height: 1.2;
                        padding-top: 8px;
                        white-space: normal;
                        overflow: hidden;
                        -o-text-overflow: ellipsis;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .recommend-scroll_text{
                        color: #fff;
                        padding-left: .213333rem;
                        padding-top: .213333rem;
                        line-height: 1;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        flex: 1 1;
                        margin-right: 5px;
                    }
                }
            }
        }
    }
`
export const betterItem = styled.div `    
    height:${props=>props.name.IconHeight};
    width:${props=>props.name.IconWidth}

`