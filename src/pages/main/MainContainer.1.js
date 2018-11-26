
import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

import uuid from 'uuid'//引入一个创建不重复的id的插件，是styled带的
import * as MainStyled from '@pages/main/styledComponent' 

import CookIcon from '@as/images/cook.png'
import CookActiveIcon from '@as/images/cook-active.png'
import HomeIcon from '@as/images/home.png'
import HomeActiveIcon from '@as/images/home-active.png'
import VipIcon from '@as/images/vip.png'
import VipActiveIcon from '@as/images/vip-active.png'
import MyIcon from '@as/images/my.png'
import MyActiveIcon from '@as/images/my-active.png'


class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',//默认选中的navBar的页面和图标
    //   hidden: false,//nav显示隐藏默认false
    //   fullScreen: true,//是否充满屏幕默认true
      tabBars:[
          //selected：该页面的选中名字，component：该页面的内容，
          {id: uuid(), title:'首页', selected:'home', component:'首页', icons:{default : HomeIcon,  active : HomeActiveIcon}},
          {id: uuid(), title:'菜谱', selected:'cook', component:'菜谱', icons:{default : CookIcon,  active : CookActiveIcon}},
          {id: uuid(), title:'Vip专区', selected:'vip', component:'Vip专区', icons:{default : VipIcon,  active : VipActiveIcon}},
          {id: uuid(), title:'我的', selected:'my', component:'我的', icons:{default : MyIcon,  active : MyActiveIcon}}
      ]
    };
  }
//此时这里就可以循环啦
  renderTabBarItem(){
      let { tabBars } = this.state;
      console.log(tabBars);
      //因为react没有循环的类似v-for语句，因此只能map映射一下，或者for循环
      return tabBars.map(item=>(
        <TabBar.Item
            title={item.title}
            key={item.id}
            icon={<MainStyled.MainTabIcon url={item.icons.default} />}
            selectedIcon={<MainStyled.MainTabIcon url={item.icons.active} />}
            selected={this.state.selectedTab === item.selected}
            // badge={1} 这个是那个小红点，消息
            onPress={() => {
                this.setState({
                    selectedTab: item.selected,
                });
            }}
            data-seed="logId"
        >
            {item.component}
        </TabBar.Item>
      ))
  }

  render() {
    return (
      <MainStyled.MainWrapper>
        <TabBar
          unselectedTintColor="#999999"
          tintColor="#de0041"
          barTintColor="#151515"
        >
          {this.renderTabBarItem()}
        </TabBar>
      </MainStyled.MainWrapper>
    );
  }
}

export default MainContainer