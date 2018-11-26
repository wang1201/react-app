import styled from 'styled-components'

export const navbox = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    align-content: flex-start;
    color: #fff;
    font-size: .373333rem;
    border-bottom: .026667rem solid #4d4d4d;
    margin-bottom: .533333rem;
    .nav-box_item{
        box-sizing: border-box;
        flex: 0 0 25%;
        text-align: center;
        margin-bottom: .266667rem;
        justify-content: flex-end;
        flex-direction: column;
        align-items: center;
        display: flex;
        .box-item_img{
            display: block;
            width: .96rem;
            height: .96rem;
            margin: auto;
        }
        .box-item_name{
            display: block;
            padding-top: .186667rem;
            text-align: center;
        }
        
    }
`