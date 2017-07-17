import React, { Component } from 'React'
import LoginPage from './Login'
import HomePage from "./Home"
import SearchPage from "./Search"
import BookInfo from "./BookInfo"
import BookCollect from "./BookCollect"
import BookCollectAdd from "./BookCollectAdd"
import {Scene, Router, ActionConst,Actions} from 'react-native-router-flux'
import * as scenes from '../constants/scene'

export default class AppRouter extends Component {
  render() {
    return (
        <Router>
          <Scene key="root">
              <Scene
                  key={scenes.SCENE_LOGIN}
                  component={LoginPage}
                  title="登录"
                  type={ActionConst.RESET}
                  hideNavBar
              />
              <Scene
                  key={scenes.SCENE_INDEX}
                  component={HomePage}
                  title="首页"
                  type={ActionConst.REPLACE}
                  hideNavBar
                  duration="0"
                  />
              <Scene
                  key={scenes.SCENE_SEARCH}
                  component = {SearchPage}
                  type={ActionConst.PUSH}
                  title="搜索"
                  hideNavBar
                  duration="0"
                  />
              <Scene
                  key={scenes.SCENE_BOOK_INFO}
                  component = {BookInfo}
                  type={ActionConst.PUSH}
                  title="图书详情"
                  hideNavBar
              />
              <Scene
                  key={scenes.SCENE_BOOK_COLLECT}
                  component = {BookCollect}
                  title="收藏本书"
                  hideNavBar
              />
              <Scene
                  key={scenes.SCENE_BOOK_COLLECT_ADD}
                  component = {BookCollectAdd}
                  title="收藏本书"
                  hideNavBar
              />
          </Scene>
        </Router>
    )
  }
}