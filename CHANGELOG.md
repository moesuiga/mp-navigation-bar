## [1.0.1](https://github.com/moesuiga/mp-navigation-bar/compare/v1.0.0...v1.0.1) (2020-11-24)


### Bug Fixes

* 修复hide-home参数未使用 ([dcba368](https://github.com/moesuiga/mp-navigation-bar/commit/dcba36810cd4395db3973250973e04bea77e4b6e))



# [1.0.0](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.11...v1.0.0) (2020-11-22)


### Features

* 使用普通view标签替代cover-view标签 ([766d505](https://github.com/moesuiga/mp-navigation-bar/commit/766d505ea15fc8e901817b3c67107cf63fcc3742))
* 添加隐藏/展示导航栏的组件方法 ([152ede4](https://github.com/moesuiga/mp-navigation-bar/commit/152ede412205ac3d42b920aa769153ded71be45f))



## [0.0.10](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.9...v0.0.10) (2019-03-18)


### Features

* **opacity:** add property opacity ([e3be186](https://github.com/moesuiga/mp-navigation-bar/commit/e3be186f03fd16b0dd384bc5757118801a97ff1f))



## [0.0.9](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.8...v0.0.9) (2019-03-06)


### Features

* **props:** 添加 hide-nav 与 auto-stick 属性，可以隐藏自定义导航 ([f418f11](https://github.com/moesuiga/mp-navigation-bar/commit/f418f11254baa71b6f8498fa8e31c2dfd5c765ed)), closes [#8](https://github.com/moesuiga/mp-navigation-bar/issues/8)



## [0.0.8](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.7...v0.0.8) (2019-01-02)


### Bug Fixes

* 修复组件 `auto-height="{{false}}"` 时高度多出页面 ([a25da41](https://github.com/moesuiga/mp-navigation-bar/commit/a25da41df7fc7b8a70e8644cf101256be5769c95))



## [0.0.7](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.6...v0.0.7) (2019-01-02)


### Bug Fixes

* 修复`cover-view`组件默认属性`overflow:hidden`导致的无法显示自定义action插槽 ([c443663](https://github.com/moesuiga/mp-navigation-bar/commit/c4436637ba2230264a5803d0cca2526a6ab5707f))
* 修复title内容过长的展示问题 ([14c2d2a](https://github.com/moesuiga/mp-navigation-bar/commit/14c2d2a74f6ee10912b556708d7d44781b7498db))



## [0.0.6](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.5...v0.0.6) (2018-12-29)


### Features

* 添加属性 `auto-height`, 默认值 `true` ([115f863](https://github.com/moesuiga/mp-navigation-bar/commit/115f8638261bf86694d2540d22519316092a75df))



## [0.0.5](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.4...v0.0.5) (2018-12-29)


### Features

* 标题文字添加字体大小：18px ([afb7c70](https://github.com/moesuiga/mp-navigation-bar/commit/afb7c70c4634f6052525862c3b345c056c3eb946))



## [0.0.4](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.3...v0.0.4) (2018-12-28)


### Bug Fixes

* 修复原生组件覆盖自定义导航 ([564d98e](https://github.com/moesuiga/mp-navigation-bar/commit/564d98ec950ed6243e1785feeaa01db00c3f9c13))



## [0.0.3](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.2...v0.0.3) (2018-12-26)


### Bug Fixes

* 页面内容插槽的padding-top值更改 ([89876a4](https://github.com/moesuiga/mp-navigation-bar/commit/89876a45b471de78776e8bc79d3385a9343af0a8))



## [0.0.2](https://github.com/moesuiga/mp-navigation-bar/compare/eb262f81fc94e2827fe2346befe56694915047f7...v0.0.2) (2018-12-26)


### Bug Fixes

* 修复小程序SDKVersion: 2.2.3以下无返回按钮显示 ([70b76bc](https://github.com/moesuiga/mp-navigation-bar/commit/70b76bc6a831adb1fbf03e08b1d0dc530fabd5d3))


### Features

* **HOME_PATH:** 通过 `app.__APP_HOME_PATH__` 更改默认首页路径 ([c52223e](https://github.com/moesuiga/mp-navigation-bar/commit/c52223e8a70b4857af8a984f9f1fa2784950a5ca))
* **properties:** 添加属性 `auto-capsule` ([cb7c5e2](https://github.com/moesuiga/mp-navigation-bar/commit/cb7c5e236fd45715c7bf1c053f7d7aed072c71c6))
* 小程序自定义导航组件 v0.0.1 ([eb262f8](https://github.com/moesuiga/mp-navigation-bar/commit/eb262f81fc94e2827fe2346befe56694915047f7))


### BREAKING CHANGES

* **HOME_PATH:** 原本通过 `wx.appHomePage` 变更首页默认路径，改为使用 `app.__APP_HOME_PATH__` 变更



