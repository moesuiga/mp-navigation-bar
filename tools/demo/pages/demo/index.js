Page({
  data: {
    title: '这里有一个超长超长超长的title啊哈啊哈啊哈啊哈啊哈啊哈啊哈',
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
  }
});
