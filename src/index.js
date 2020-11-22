const app = getApp();
const { statusBarHeight, system, windowWidth } = wx.getSystemInfoSync();
const isIOS = /^ios/i.test(system);

/**
 * 导航胶囊的左边距
 */
let navBtnLeft = 8;

/**
 * 导航胶囊的上边距 (不算statusBar)
 */
let navBtnTop = 8;

/**
 * 导航胶囊的高度
 */
let navBtnHeight = 32;

/**
 * 导航胶囊两边的padding
 */
let navBtnPad = 5;

/**
 * 导航栏高度
 */
let navHeight = 48;

if (isIOS) {
  navBtnLeft = 10;
  navBtnTop = 4;
  navHeight = 44;
  navBtnPad = 0;
}

// 能够使用微信提供的相应接口获取胶囊位置信息
// 基础库 2.1.0 开始支持
// 不使用 canIUse 判断是因为基础库 2.6.2 以下 canIUse 数据不全
// 部分接口能使用但会返回 false
// https://developers.weixin.qq.com/community/develop/doc/000cac40cf0eb8d3e429647c351c09
if (wx.getMenuButtonBoundingClientRect) {
  const rect = wx.getMenuButtonBoundingClientRect();
  navBtnLeft = windowWidth - rect.right;
  navBtnTop = rect.top - statusBarHeight;
  navBtnHeight = rect.height;

  if (!isIOS) {
    // 安卓会偏下一点，向上移1px
    navBtnTop -= 1;
  }
}

/**
 * 计算标题文字的最大宽度值 (px)
 * @param {Number} windowWidth 窗口宽度
 * @param {Boolean} isIOS 是否iOS
 */
function calcMaxWidth() {
  const capsuleWidth = 43 * 2 + 1;
  const total = (navBtnLeft + capsuleWidth + navBtnPad * 2) * 2;

  // `- 10` 是为了两边留出一点空白
  const maxWidth = windowWidth - total - 10;
  return maxWidth;
}

Component({
  options: {
    multipleSlots: true
  },
  externalClasses: ['page-wrap-class'],
  properties: {
    /**
     * 导航标题
     */
    title: {
      type: String,
      value: '',
      observer(newTitle) {
        wx.setNavigationBarTitle({
          title: newTitle,
        });
      }
    },
    /**
     * 是否允许点击返回/回到首页
     */
    enable: {
      type: Boolean,
      value: true
    },
    /**
     * 返回页面数
     */
    delta: {
      type: Number,
      value: 1
    },
    showHome: {
      type: Boolean,
      value: true,
      observer(value) {
        console.warn('建议使用 hide-home 属性替换 show-home，此属性将来可能会废弃');
        this.setData({
          hideHome: !value,
        });
      }
    },
    /**
     * 是否隐藏 home 按钮
     */
    hideHome: {
      type: Boolean,
      value: false
    },
    /**
     * 是否隐藏返回按钮
     */
    hideBack: {
      type: Boolean,
      value: false
    },
    /**
     * 导航背景色，支持 image 渐变色
     * 使用的 background
     */
    bgColor: {
      type: String,
      value: 'white'
    },
    /**
     * 导航文本样式 light/dark
     */
    textStyle: {
      type: String,
      value: 'dark',
      observer(newStyle) {
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
    /**
     * 是否由内容自动撑开高度
     * 为 `false` 时，会设置 `height: 100%`，请注意给父组件设置高度
     */
    autoHeight: {
      type: Boolean,
      value: true
    },
    /**
     * 隐藏导航
     */
    hideNav: {
      type: Boolean,
      value: false
    },
    /**
     * 页面内容自动置顶（包含导航位置）
     * 可通过 background, opacity 配合 autoStick 模拟原生 APP 沉浸式页面样式
     */
    autoStick: {
      type: Boolean,
      value: false
    },
    /**
     * 自定义导航不透明度
     * @version 0.0.10
     * @default 1
     */
    opacity: {
      type: Number,
      value: 1
    },

    /**
     * 隐藏默认的 返回/首页 按钮，
     * 自定义按钮插槽
     */
    useCustomAction: {
      type: Boolean,
      value: false
    },

    /**
     * 是否允许返回前一个小程序
     * 为 `true` 时，如果是从其他小程序跳转过来的，
     * 即使只剩一个页面，依然展示返回按钮，并在点击时返回上一个小程序
     * 最低需要微信基础库版本 2.1.2
     */
    canBackMp: {
      type: Boolean,
      value: false,
    },

    /**
     * 当从小程序打开，点击返回到来源小程序时，
     * 要给来源小程序传递的数据信息
     * 最低需要微信基础库版本 2.1.2
     */
    mpExtraData: {
      type: Object,
      value: {}
    },

    /**
     * 用于适配iPhone X类型的机型，
     * 给 page-wrap 设置底部安全区域 `padding-bottom: env(safe-area-inset-bottom);`
     */
    safeAreaBottom: {
      type: Boolean,
      value: false
    }
  },

  data: {
    navBtnTop,
    navBtnLeft,
    navBtnHeight,
    navBtnPad,
    navHeight,
    justOnePage: true,
    barHeight: +statusBarHeight,
    /**
     * 标题文字的最大宽度
     */
    maxWidth: calcMaxWidth(),
    fromMp: false,
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
      let fromMp = false;
      let launchOption = null;

      // 微信基础库 2.9.4 开始支持
      if (wx.canIUse('getEnterOptionsSync')) {
        launchOption = wx.getEnterOptionsSync();
      } else if (wx.getLaunchOptionsSync) {
        // 微信基础库 2.1.2 开始支持
        launchOption = wx.getLaunchOptionsSync();
      }

      if (launchOption && launchOption.scene === 1037) {
        fromMp = true;
      }
      this.setData({
        fromMp,
        justOnePage: pages.length === 1
      });
    },

    /**
     * 隐藏导航栏
     */
    disappearNavigation() {
      this.setData({
        hideNav: true
      });
    },

    /**
     * 展示导航栏
     */
    displayNavigation() {
      this.setData({
        hideNav: false
      });
    },

    /**
     * 点击返回按钮
     */
    _handleNavBack() {
      const detail = {};
      this.triggerEvent('back', detail);
      const {
        enable,
        delta,
        mpExtraData,
        fromMp,
        canBackMp,
        justOnePage,
      } = this.data;

      if (enable) {
        if (justOnePage && fromMp && canBackMp) {
          wx.navigateBackMiniProgram({ extraData: mpExtraData });
        } else {
          wx.navigateBack({ delta });
        }
      }
    },

    /**
     * 点击首页按钮
     */
    _handleNavHome() {
      const detail = {};
      this.triggerEvent('home', detail);
      const { homePath } = this;
      const { enable } = this.data;
      if (enable && homePath) {
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
