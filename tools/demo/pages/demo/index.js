Page({
  data: {
    title: 'DEMO',
    showHome: true,
    hideBack: false,
    bgColor: '#df3348',
    textStyle: 'light',
    color: 'white'
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
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '',
        animation: {}
      });
    } else {
      this.setData({
        textStyle: 'light',
        bgColor: '#df3348',
        color: 'white'
      });
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '',
        animation: {}
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
  }
});
