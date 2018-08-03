import Vue from 'vue'
import App from './App'

import 'mp-weui/lib/style.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      '^pages/index/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0097ff',
      navigationBarTitleText: 'Studio',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#6f6f6f',
      selectedColor: '#18a3ff',
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/index/main',
          iconPath: 'static/img/wm.png',
          selectedIconPath: 'static/img/wms.png',
          text: '外卖'
        },
        {
          pagePath: 'pages/counter/main',
          iconPath: 'static/img/dd.png',
          selectedIconPath: 'static/img/dds.png',
          text: '订单'
        },
        {
          pagePath: 'pages/logs/main',
          iconPath: 'static/img/gwc.png',
          selectedIconPath: 'static/img/gwc.png',
          text: '购物车'
        },
        {
          pagePath: 'pages/index/main',
          iconPath: 'static/img/wd.png',
          selectedIconPath: 'static/img/wds.png',
          text: '我的'
        }
      ]
    }
  }
}
