Page({
  data: {
    title: '这里有一个超长超长超长的title啊哈啊哈啊哈啊哈啊哈啊哈啊哈',
    showHome: true,
    hideBack: false,
    bgColor: '#df3348',
    textStyle: 'light',
    color: 'white',
    hideNav: false,
    opacity: 0,
  },
  onPageScroll(e) {
    const { scrollTop } = e;
    let opacity = scrollTop / 500;
    if (opacity > 1) {
      opacity = 1;
    }
    if (opacity !== this.data.opacity) {
      this.setData({
        opacity
      });
    }
  },
  handleBack(e) {
    console.log(e);
  },
  changeTitle() {
    this.setData({
      title: 'NEW TITLE'
    });
  },
  changeStyle() {
    const { textStyle } = this.data;
    if (textStyle === 'light') {
      this.setData({
        textStyle: 'dark',
        bgColor: '#ffffff',
        color: 'black'
      });
    } else {
      this.setData({
        textStyle: 'light',
        bgColor: '#df3348',
        color: 'white'
      });
    }
  },
  useCustomAction() {
    this.setData({
      showHome: false,
      hideBack: true
    });
  },
  showDefaultAction() {
    this.setData({
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
