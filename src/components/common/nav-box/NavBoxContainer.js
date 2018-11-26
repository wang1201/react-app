import React, { Component } from 'react'
// import connect from '@connect'
import * as NavBoxStyled from '@common/nav-box/styledComponent' 
class NavBoxContainer extends Component{
      state = {
        navIcon:[],
      }
      componentWillMount(){
        fetch('/mw/app/logo2?type=1')
        .then(response => response.json())
        .then(res => {
          // data就是我们请求的props
          this.setState({
            navIcon: res.entity.appLogo,
          });
        });
      }
      RenderNav(){
          let { navIcon }  = this.state;
          return navIcon.map(item=>(
            <div className="nav-box_item" key={item.id}>
                <img className="box-item_img" src={item.icon}/>
                <span className="box-item_name">{item.name}</span>
            </div>
          ))
      }
      render() {
        return (
            <NavBoxStyled.navbox>
                {this.RenderNav()}
            </NavBoxStyled.navbox>
        );
      }
}
export default NavBoxContainer
