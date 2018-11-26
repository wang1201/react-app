
import React, { Component, Fragment } from 'react'
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

import uuid from 'uuid'//引入一个创建不重复的id的插件，是styled带的
import * as MainStyled from '@pages/main/styledComponent'
import HeaderContainer from '@common/header/HeaderContainer'

import {
  BrowserRouter as Router, // 路由切换模式
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
//引入页面
import HomeContainer from '@pages/home/HomeContainer'
import CookContainer from '@pages/cook/CookContainer'
import MyContainer from '@pages/my/MyContainer'
import VipContainer from '@pages/vip/VipContainer'
import LoginContainer from '@pages/login/LoginContainer'
import NotFoundContainer from '@pages/not-found/NotFoundContainer'

//引入图标
import CookIcon from '@as/images/cook.png'
import CookActiveIcon from '@as/images/cook-active.png'
import HomeIcon from '@as/images/home.png'
import HomeActiveIcon from '@as/images/home-active.png'
import VipIcon from '@as/images/vip.png'
import VipActiveIcon from '@as/images/vip-active.png'
import MyIcon from '@as/images/my.png'
import MyActiveIcon from '@as/images/my-active.png'
import axios from "axios"

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBar: this.props.location.pathname,
      tabBars: [
        //selected：该页面的选中名字，component：该页面的内容，
        { id: uuid(), title: '首页', to: '/', selected: '/home', icons: { default: HomeIcon, active: HomeActiveIcon } },
        { id: uuid(), title: '菜谱', to: '/cook', selected: '/cook', icons: { default: CookIcon, active: CookActiveIcon } },
        { id: uuid(), title: 'Vip专区', to: '/vip', selected: '/vip', icons: { default: VipIcon, active: VipActiveIcon } },
        { id: uuid(), title: '我的', to: '/my', selected: '/my', icons: { default: MyIcon, active: MyActiveIcon } }
      ]
    };
  }
  // 当路由切来切去的时候，改状态
  componentWillReceiveProps(props, state) {
    this.setState({ activeBar: props.location.pathname });
  }
  renderTab() {
    let { tabBars, activeBar } = this.state;
    return tabBars.map(item => (
      <Link to={item.to} key={item.id} active={activeBar === item.selected ? "true" : null}
        onClick={() => this.props.history.push({ pathname: activeBar })}
      >
        <img src={activeBar === item.selected ? item.icons.active : item.icons.default} />
        {item.title}
      </Link>
    ))
  }
  renderContent() {
    return (
      <Switch>
        <Route path="/" exact render={() => {
          let isLogin = true
          return isLogin ? <Redirect to="/home" /> : <LoginContainer />
        }} />
        <Route path="/home" children={(props) => <HomeContainer {...props} />} />
        <Route path="/cook" children={(props) => <CookContainer {...props} />} />
        <Route path="/vip" component={VipContainer} ></Route>
        <Route path="/my" component={MyContainer} />

        <Route path="/not-found" component={NotFoundContainer} />

        <Redirect to={{ pathname: '/not-found' }} />
      </Switch>
    )
  }
  render() {
    return (
      <MainStyled.MainWrapper>
        <HeaderContainer />
        <MainStyled.MainRouter >
          {/* Switch只能匹配到一个Route */}
          <div className="main-content">
            {this.renderContent()}
          </div>
          <div className="main-tab">
            {this.renderTab()}
          </div>

        </MainStyled.MainRouter>
      </MainStyled.MainWrapper>
    );
  }
}

export default withRouter(MainContainer)