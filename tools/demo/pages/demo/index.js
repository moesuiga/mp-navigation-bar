const title = [
  '这里有一个超长超长超长的title啊哈啊哈啊哈啊哈啊哈啊哈啊哈',
  '短标题'
];

Page({
  tid: 0,
  data: {
    title: title[0],
    showHome: true,
    hideBack: false,
    bgColor: 'rgba(223, 51, 72, 0)',
    textStyle: 'light',
    color: 'white',
    hideNav: false,
    opacity: 0,
    useCustomAction: false,
  },
  onPageScroll(e) {
    const { scrollTop } = e;
    let calcOpacity = scrollTop / 500;
    if (calcOpacity > 1) {
      calcOpacity = 1;
    }
    const { opacity, bgColor } = this.data;
    if (calcOpacity !== opacity) {
      this.setData({
        opacity: calcOpacity,
        bgColor: bgColor.replace(/,[^,]+\)$/, `, ${calcOpacity})`),
      });
    }
  },
  handleBack(e) {
    console.log(e);
  },
  changeTitle() {
    this.setData({
      title: this.tid ? title[0] : title[1]
    });
    this.tid = this.tid ? 0 : 1;
  },
  useSlotTitle() {
    this.setData({
      title: '',
    });
  },
  changeStyle() {
    const { textStyle, opacity } = this.data;
    if (textStyle === 'light') {
      this.setData({
        textStyle: 'dark',
        bgColor: `rgba(255, 255, 255, ${opacity})`,
        color: 'black'
      });
    } else {
      this.setData({
        textStyle: 'light',
        bgColor: `rgba(223, 51, 72, ${opacity})`,
        color: 'white'
      });
    }
  },
  useCustomAction() {
    this.setData({
      useCustomAction: true,
    });
  },
  showDefaultAction() {
    this.setData({
      useCustomAction: false,
      showHome: true,
      hideBack: false
    });
  },
  customAction() {
    wx.navigateBack();
  },
  hideBack() {
    this.setData({
      showHome: true,
      hideBack: true
    });
  },
  hideHome() {
    this.setData({
      showHome: false,
      hideBack: false
    });
  },
  hideNavigation() {
    const nav = this.selectComponent('#nav-id');
    if (nav) {
      nav.disappearNavigation();
    }
  },
  showNavigation() {
    const nav = this.selectComponent('#nav-id');
    if (nav) {
      nav.displayNavigation();
    }
  },
  hideNavigationByProps() {
    this.setData({
      hideNav: true,
    });
  },
  showNavigationByProps() {
    this.setData({
      hideNav: false,
    });
  },
  /**
   * 视频进入或退出全屏
   * @param {Object} e 事件对象
   */
  fullscreenChange(e) {
    // IOS 机型 视频进入全屏时，隐藏自定义导航
    const { fullScreen } = e.detail;
    // 安卓机型重新设置的话，会导致内容刷新，视频退出全屏并暂停
    this.setData({
      hideNav: !!fullScreen,
    });
    // const { system } = wx.getSystemInfoSync();
    // const isIOS = /^ios/i.test(system);
    // if (isIOS) {
    //   this.setData({
    //     hideNav: !!fullScreen,
    //   });
    // }
  },
});
