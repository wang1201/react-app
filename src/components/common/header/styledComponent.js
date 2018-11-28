import styled from 'styled-components'

export const header = styled.div`
    z-index: 50;
    width: 100%;
    height: 1.173333rem;
    line-height:1.173333rem;
    .header{
        display: flex;
        background: #080808;
        height: 100%;
        align-items:center;
        padding: .186667rem .266667rem;
        .person-page{
            height:100%;
            img{
                display: inline-block;
                height:100%;
                vertical-align: top;
            }
        }
        .search{
            align-items: center;
            background: #fff;
            border-radius: .106667rem;
            color: #a0a0a0;
            flex: 1 1;
            margin-left: .293333rem;
            height: 100%;
            display:flex;
            .icon-search{
                fill: #a0a0a0;
                padding: .026667rem;
                margin-left: .266667rem;
                margin-right: .266667rem;
            }
            .search-text{
                line-height:.746667rem;
                margin-top:.026667rem;
            }
        }
    }
`