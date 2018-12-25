function getSystemAndroidOrIosOrIosX() {
  try {
    const { system, model } = wx.getSystemInfoSync();
    const isIos = /^ios/i.test(system);
    const isIosX = isIos ? /^iPhone\s+X/.test(model) : false;

    let sys = 'android';
    if (isIos) {
      sys = isIosX ? 'iosX' : 'ios';
    }
    return sys;
  } catch (e) {
    return 'android';
  }
}

module.exports = getSystemAndroidOrIosOrIosX;
