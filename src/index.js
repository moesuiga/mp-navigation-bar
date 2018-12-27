const app = getApp();
const { statusBarHeight, system } = wx.getSystemInfoSync();
const isIOS = /^ios/i.test(system);

Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: 'WeChat',
      observer(newTitle) {
        this.setData({
          title: newTitle
        });
      }
    },
    enable: {
      type: Boolean,
      value: true
    },
    delta: {
      type: Number,
      value: 1
    },
    showHome: {
      type: Boolean,
      value: true
    },
    hideBack: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: 'white'
    },
    textStyle: {
      type: String,
      value: 'dark',
      observer(newStyle) {
        if (!this.properties.autoCapsule) return;
        if (newStyle === 'light') {
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#000000',
            animation: {}
          });
        } else {
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#ffffff',
            animation: {}
          });
        }
      }
    },
    autoCapsule: {
      type: Boolean,
      value: true
    }
  },
  data: {
    isIOS,
    justOnePage: true,
    barHeight: +statusBarHeight,
    refresh: true,
  },
  lifetimes: {
    attached() {
      this._init();
    }
  },
  attached() {
    this._init();
  },
  methods: {
    _init() {
      this.homePath = app.__APP_HOME_PATH__ || '/pages/home/home';
      const pages = getCurrentPages();
      this.setData({
        justOnePage: pages.length === 1
      });

      // 刷新一下导航条结构
      // 使得该部分的 cover-view 层级高于页面内容的原生组件
      setTimeout(() => {
        this.refreshNavigation();
      }, 100);
    },

    /**
     * 刷新导航条 (切换两个完全相同的导航显示与隐藏)
     *
     * 通过该刷新操作，来达到覆盖页面原生组件的目的
     *
     * 原理：
     * 1. cover-view 可以覆盖原生组件
     * 2. 后渲染的原生组件层级更高
     */
    refreshNavigation() {
      const { refresh } = this.data;
      this.setData({
        refresh: !refresh
      });
    },
    /**
     * 点击返回按钮
     */
    _handleNavBack() {
      const detail = {};
      this.triggerEvent('back', detail);
      const { enable, delta } = this.properties;
      if (enable) {
        wx.navigateBack({ delta });
      }
    },

    /**
     * 点击首页按钮
     */
    _handleNavHome() {
      const detail = {};
      this.triggerEvent('home', detail);
      const { homePath } = this;
      if (homePath) {
        wx.switchTab({
          url: homePath,
          fail() {
            wx.reLaunch({
              url: homePath
            });
          }
        });
      }
    }
  }
});
