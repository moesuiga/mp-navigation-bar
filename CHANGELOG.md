## [0.0.10](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.9...v0.0.10) (2019-03-18)


### Features

* **opacity:** add property opacity ([e3be186](https://github.com/moesuiga/mp-navigation-bar/commit/e3be186))



## [0.0.9](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.8...v0.0.9) (2019-03-06)


### Features

* **props:** 添加 hide-nav 与 auto-stick 属性，可以隐藏自定义导航 ([f418f11](https://github.com/moesuiga/mp-navigation-bar/commit/f418f11)), closes [#8](https://github.com/moesuiga/mp-navigation-bar/issues/8)



## [0.0.8](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.7...v0.0.8) (2019-01-02)


### Bug Fixes

* 修复组件 `auto-height="{{false}}"` 时高度多出页面 ([a25da41](https://github.com/moesuiga/mp-navigation-bar/commit/a25da41))



## [0.0.7](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.6...v0.0.7) (2019-01-02)


### Bug Fixes

* 修复`cover-view`组件默认属性`overflow:hidden`导致的无法显示自定义action插槽 ([c443663](https://github.com/moesuiga/mp-navigation-bar/commit/c443663))
* 修复title内容过长的展示问题 ([14c2d2a](https://github.com/moesuiga/mp-navigation-bar/commit/14c2d2a))



## [0.0.6](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.5...v0.0.6) (2018-12-29)


### Features

* 添加属性 `auto-height`, 默认值 `true` ([115f863](https://github.com/moesuiga/mp-navigation-bar/commit/115f863))



## [0.0.5](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.4...v0.0.5) (2018-12-29)


### Features

* 标题文字添加字体大小：18px ([afb7c70](https://github.com/moesuiga/mp-navigation-bar/commit/afb7c70))



## [0.0.4](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.3...v0.0.4) (2018-12-28)


### Bug Fixes

* 修复原生组件覆盖自定义导航 ([564d98e](https://github.com/moesuiga/mp-navigation-bar/commit/564d98e))



## [0.0.3](https://github.com/moesuiga/mp-navigation-bar/compare/v0.0.2...v0.0.3) (2018-12-26)


### Bug Fixes

* 页面内容插槽的padding-top值更改 ([89876a4](https://github.com/moesuiga/mp-navigation-bar/commit/89876a4))



## [0.0.2](https://github.com/moesuiga/mp-navigation-bar/compare/eb262f8...v0.0.2) (2018-12-26)


### Bug Fixes

* 修复小程序SDKVersion: 2.2.3以下无返回按钮显示 ([70b76bc](https://github.com/moesuiga/mp-navigation-bar/commit/70b76bc))


### Features

* 小程序自定义导航组件 v0.0.1 ([eb262f8](https://github.com/moesuiga/mp-navigation-bar/commit/eb262f8))
* **HOME_PATH:** 通过 `app.__APP_HOME_PATH__` 更改默认首页路径 ([c52223e](https://github.com/moesuiga/mp-navigation-bar/commit/c52223e))
* **properties:** 添加属性 `auto-capsule` ([cb7c5e2](https://github.com/moesuiga/mp-navigation-bar/commit/cb7c5e2))


### BREAKING CHANGES

* **HOME_PATH:** 原本通过 `wx.appHomePage` 变更首页默认路径，改为使用 `app.__APP_HOME_PATH__` 变更



