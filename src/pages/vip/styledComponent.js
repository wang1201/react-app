import styled from 'styled-components'

export const vip=styled.div`

    /* swiper */
    .slider-decorator-0 {
        bottom: 0.68rem !important;

        .am-carousel-wrap {
            text-align: right;
            padding-right: 10px;

            .am-carousel-wrap-dot>span {
                background: #6c6c6c;
                height: 7.5px;
                width: 7.5px;
            }

            .am-carousel-wrap-dot-active>span {
                background: #c5b071;
            }
        }
    }
    /* vip */
    .vip-nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
         margin-bottom: 20px;
        .vip-nav-item {
            color: #fff;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px 0;
            flex: 0 0 22%;
            background: #343434;
            img{
                width: 40px;
                height: 50px;
                margin-bottom: 10px;
            }
            span{
                padding-top:5px;
                line-height: 1;
                font-size: 14px;
                color: #bfbfbf;
            }
        }
    }



`