const app = getApp();
const { statusBarHeight, system, model } = wx.getSystemInfoSync();
const isIOS = /^ios/i.test(system);
const isIosX = isIOS ? /^iPhone\s+X/.test(model) : false;

let sys = 'android';
if (isIOS) {
  sys = isIosX ? 'iosX' : 'ios';
}

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
      value: 'dark'
    }
  },
  data: {
    isIOS,
    system: sys,
    justOnePage: true,
    barHeight: statusBarHeight,
  },
  lifetimes: {
    attached() {
      this.homePath = app.__APP_HOME_PATH__ || '/pages/home/home';
      const pages = getCurrentPages();
      this.setData({
        justOnePage: pages.length === 1
      });
    }
  },
  methods: {
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
