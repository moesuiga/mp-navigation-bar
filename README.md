# mp-navigation-bar 1.x

微信小程序自定义导航组件

仿照小程序官方提供的自定义导航组件，添加了回到首页功能。

> 使用此组件需要依赖小程序基础库 2.2.1 以上版本，同时依赖开发者工具的 npm 构建。具体详情可查阅[官方 npm 文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

## 旧版本

0.x 版本是以 `cover-view` 组件做的，目的是覆盖页面内容的一些原生组件，但鉴于微信小程序已提供原生组件同层渲染能力，且 `cover-view` 组件有很多限制，1.x版本又改回了 `view` 组件来做。

[0.x README](./README_v0.md)

## BUGs

- [ ] `input` 组件在较低位置(距离底部高度低于键盘高度)获取焦点时，弹出键盘会将导航栏顶起。
无法处理，只能通过布局尽量避免这种情况。
或者设置 `adjust-position="{{false}}"` 属性并配合聚焦、失焦、键盘高度改变事件动态更改输入框的定位位置。

## TIPs

1. 回到首页，首页的默认值为 `/pages/home/home`，可以通过设置 `app.__APP_HOME_PATH__` 来修改回到首页的页面路径。

2. `auto-stick` 属性如果是动态设置的，状态改变时，会触发页面内容重新渲染，从而可能引起预料外的问题。

    如在安卓端，视频全屏播放时，设置 `hide-nav="true" auto-stick="true"` 会导致视频退出全屏并暂停。

    此种情况，请只设置 `hide-nav="true"` 来隐藏导航，在视频退出全屏时再设置显示导航。

## 使用演示

![mp-navigation-bar demo](./docs/demo.gif)

## 使用方法

1. 安装 mp-navigation-bar

``` bash
$ npm install --save mp-navigation-bar
```

2. 在 `app.json` 中的 `window.navigationStyle` 设置为 `"custom"` 来开启自定义导航：

``` json
{
  "window": {
    "navigationStyle": "custom"
  }
}
```

或者单独在页面的json文件中设置【需要iOS/Android微信客户端7.0.0以上支持】

``` json
{
  "navigationStyle": "custom"
}
```

3. 在需要使用 `mp-navigation-bar` 的页面 page.json 中，添加配置引入导航组件：

``` json
{
  "usingComponents": {
    "navigation-bar": "mp-navigation-bar"
  }
}
```

4. 在 `wxml` 文件中使用 `<navigation-bar>`

``` xml
<navigation-bar title="{{title}}" bindback="handleBack" bindhome="handleHome">
  <view class="page-content">Page content here.</view>
</navigation-bar>
```

### 属性介绍

| 属性名称      | 类型    | 默认值  | 是否必须 | 说明                                          |
|--------------|---------|--------|----------|----------------------------------------------|
| title        | String  | '' | 否       | 导航栏标题                                    |
| enable       | Boolean | true   | 否       | 是否允许点击返回/回到首页按钮                        |
| delta        | Number  | 1      | 否       | 返回的页面数                                   |
| show-home    | Boolean | true   | 否       | 是否显示首页按钮 (不推荐)                         |
| hide-home    | Boolean | false   | 否       | 是否隐藏首页按钮 (`1.x`) (推荐)                         |
| hide-back    | Boolean | false  | 否       | 是否隐藏返回按钮                               |
| bg-color     | String  | white  | 否       | 导航栏背景色 (支持 image、渐变色)    |
| text-style   | String  | dark   | 否       | 导航栏标题文字颜色 (dark/light)                 |
| auto-height  | Boolean | true   | 否       | 是否由内容自动撑开高度, 为 `false` 时，会设置 `height: 100%`，请注意给父组件设置高度 (0.0.6)|
| hide-nav     | Boolean | false  | 否       | 是否隐藏自定义导航 (0.0.9) |
| auto-stick   | Boolean | false  | 否       | 隐藏自定义导航时，是否将内容自动上推到顶 可通过 background, opacity 配合 autoStick 模拟原生 APP 沉浸式页面样式 (0.0.9) |
| opacity      | Number  | 1      | 否       | 自定义导航的不透明度,不会影响返回/首页按钮部分 (0.0.10)                  |
| use-custom-action | Boolean  | false | 否 | 隐藏默认的返回/首页按钮，通过 slot="action" 插槽自定义返回按钮 |
| can-back-mp | Boolean  | false | 否 | 当小程序的启动场景为 `1037`，即从其他小程序打开时，在页面堆栈只剩下一个时，是否可以点击返回到前一个小程序 |
| mp-extra-data | Object | {} | 否 | `can-back-mp` 为 `true` 时，在返回上一个小程序时传递的数据 |
| safe-area-bottom | Boolean  | false | 否 | 用于适配 `iPhone X` 等底部有一条黑线的机型，给页面内容设置一个底部的安全区域 |


### 事件介绍

| 事件名称  | 参数   | 说明              |
|----------|--------|------------------|
| bindback | Object | 点击返回按钮的事件 |
| bindhome | Object | 点击主页按钮的事件 |

### 方法

| 方法名称             | 参数   | 说明                                                 |
|---------------------|--------|------------------------------------------------------|
| disappearNavigation | -      | 调用方法来隐藏导航栏，用于不方便通过传参的方式来隐藏的时候 (0.0.11) |
| displayNavigation   | -      | 调用方法来显示导航栏，与 `disappearNavigation` 相对 (0.0.11)     |


### slot

1. 默认 `slot` 为方便使用者装载页面内容使用。
由于导航为 `fixed` 定位，故不占用文档流位置，使用时需要在页面顶部留足相应的边距。
该插槽已经留出这部分边距，避免用户每个页面都手动设置一次。

2. 第二个为用户自定义左上角位置的slot，`name=action`
该部分通过 `absolute` 定位在左侧。

3. 第三个插槽为标题插槽， `slot="title"`
可通过该插槽设置非简单文本类标题，如图片标题。
