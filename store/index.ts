import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    // 初始化状态
    data: '初始数据',
    baseUrl: {
      type: 0,
      local: 'http://192.168.0.101:3838/',
      production: 'http://47.120.36.121:3838/'
    },
    Screen: {
      width: 0,
      height: 0
    },
    commonCss: {
      pageNavHeight: '150',
    },
    theme: {
      mode: 'day-mode',
      bgc: '#fff',
      iconColor: '#000'
    },
    currentTab: 0,
    tabbarList: [
      {
        pagePath: '/pages/index/index',
        text: '应用',
        icon: 'icon-yingyong',
      },
      {
        pagePath: '/pages/note/index',
        text: '事项',
        icon: 'icon-note',
      },
      {
        pagePath: '/pages/plan/index',
        text: '规划',
        icon: 'icon-plan',
      },
      {
        pagePath: '/pages/mine/index',
        text: '我的',
        icon: 'icon-mine',
      }
    ],
    // 首页功能列表数据
    homeList: [
      {
        title: '备忘录',
        unicode: 'icon-biaoqian',
        url: '/subPackages/memos/index/index',
        color: '#1baf59',
        desc: '记录灵感，避免遗忘'
      },
      {
        title: '记账',
        unicode: 'icon-jizhang',
        url: '/subPackages/expenses/index/index',
        color: '#7e7cea',
        desc: '记录收支，掌握财务状况'
      },
      {
        title: '日记',
        unicode: 'icon-rijix',
        url: '/subPackages/diary/index/index',
        color: '#4c8bf0',
        desc: '今天是个好日子，明天也是个好日子'
      },
      {
        title: '纪念日倒数',
        unicode: 'icon-jinianriyingxiao',
        url: '/subPackages/countdowns/index/index',
        color: '#f75e3c',
        desc: '生日，节日，纪念日，日日不忘'
      },
      {
        title: '事项',
        unicode: 'icon-note',
        url: '/pages/note/index',
        color: '#ffa851',
        desc: '日程计划，代办清单'
      },
      {
        title: '喝水',
        unicode: 'icon-shui',
        url: '/subPackages/water/index/index',
        color: '#00b5ff',
        desc: '每日8杯水'
      },
      {
        title: '阅读',
        unicode: 'icon-xuexi',
        url: '/subPackages/book/index/index',
        color: '#ce9178',
        desc: '阅读笔记，书单'
      },
      {
        title: '课程表',
        unicode: 'icon-kechengbiao',
        url: '/pages/note/index',
        color: '#ff4962',
        desc: '小初高大学课程表'
      },
      {
        title: '习惯打卡',
        unicode: 'icon-a-rilidaka',
        url: '/subPackages/test/NumericKeypad/index',
        color: '#7e7de8',
        desc: '习惯成自然'
      }
    ]
  },
  mutations: {
    // 定义 mutations，用于修改状态
    setData(state, newData) {
      state.data = newData;
    },
    setBaseUrl(state, newBaseUrl) {
      state.baseUrl = newBaseUrl;
    },
    setScreen(state, newScreen) {
      state.Screen = newScreen;
    },
    setTheme(state, newTheme) {
      state.theme = newTheme;
    },
    setCurrentTab(state, newCurrentTab) {
      state.currentTab = newCurrentTab;
    },
    setTabbarList(state, newTabbarList) {
      state.tabbarList = newTabbarList;
    },
    setHomeList(state, newHomeList) {
      state.homeList = newHomeList;
    }
  },
  actions: {
    // 可选的，用于处理异步操作，最终提交 mutations
    updateData({ commit }, newData) {
      commit('setData', newData);
    },
    updateBaseUrl({ commit }, newBaseUrl) {
      commit('setBaseUrl', newBaseUrl);
    },
    updateScreen({ commit }, newScreen) {
      commit('setScreen', newScreen);
    },
    updateTheme({ commit }, newTheme) {
      commit('setTheme', newTheme);
    },
    updateCurrentTab({ commit }, newCurrentTab) {
      commit('setCurrentTab', newCurrentTab);
    },
    updateTabbarList({ commit }, newTabbarList) {
      commit('setTabbarList', newTabbarList);
    },
    updateHomeList({ commit }, newHomeList) {
      commit('setHomeList', newHomeList);
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => uni.getStorageSync(key),
        setItem: (key, value) => uni.setStorageSync(key, value),
        removeItem: key => uni.removeStorageSync(key)
      }
    })
  ]
});