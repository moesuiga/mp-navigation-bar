Page({
  data: {
    title: 'DEMO',
    showHome: true,
    hideBack: false,
    bgColor: '#ffffff',
    textStyle: 'dark'
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
        bgColor: '#ffffff'
      });
    } else {
      this.setData({
        textStyle: 'light',
        bgColor: '#df3348'
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
  }
});
