import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    // 初始化状态
    data: '初始数据',
    commonCss: {
      pageNavHeight: '150',
    },
    theme: {
      mode: 'day-mode',
      bgc: '#fff',
      iconColor: '#000'
    },
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
    ]
  },
  mutations: {
    // 定义 mutations，用于修改状态
    setData(state, newData) {
      state.data = newData;
    },
    setTheme(state, newTheme) {
      state.theme = newTheme;
    }
  },
  actions: {
    // 可选的，用于处理异步操作，最终提交 mutations
    updateData({ commit }, newData) {
      commit('setData', newData);
    },
    updateTheme({ commit }, newTheme) {
      commit('setTheme', newTheme);
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