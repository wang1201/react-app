import styled from 'styled-components'

export const MainWrapper = styled.div`
    background:#151515;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow:hidden;
`
export const MainRouter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    flex: 1 1;
    .main-content{
         font-size:20px;
         flex: 1 1;
         overflow: scroll;
    }
    .main-tab{
        z-index: 50;
        display: flex;
        /* border: 1px solid red; */
        align-items: center;
        justify-content: space-between;
        height: 54px;
        width: 100%;
        box-sizing: border-box;
        a{
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            color: #999;
            height:54px;
            width:25%;
            text-align: center;
            &[active]{
                color: #de0041;
            }
            img{
                width:30px;
            }
            &:focus{
                border:none;
                background:none;
            }
        }
    }
`



export const MainTabIcon = styled.div`
    width: 27px;
    height: 27px;
    background:${props=>`url(${props.url}) center center /  21px 21px no-repeat`}
`