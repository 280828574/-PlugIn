# 从新建一个项目开始

> vue init yinshuang100/webpack your_project_name
>
> ? Project name (your_project_name) 项目名称
>
> ? Project description (A Vue.js project) 项目描述
>
> ? Author (yinshuang100 <yinshuang100@hzdamei.com>) 项目作者
>
> ? Is it a mobile project? (Y/n) 是否是一个移动端的项目
>
> ? Is it a multi-language project? (Y/n) 是否是一个多语言的项目
>
> ? Vue build (Use arrow keys) 选择Runtime + Compiler: recommended for most users
>
> ? Install vue-router? (Y/n) 是否使用vue-router
>
> ? Install vuex? (Y/n) 是否使用vuex
>
> ? Use prerender? (Y/n) 是否使用预渲染
>
> ? Use ESLint to lint your code? (Y/n) 是否使用ESLint，选择Standard (https://github.com/standard/standard)
>
> ? Set up unit tests (Y/n) 选择N，--TODO--
>
> ? Setup e2e tests with Nightwatch? (Y/n) 选择N，--TODO--
>
> ? Should we run `npm install` for you after the project has been created? (recommended) 是否自动安装依赖，尽量选择使用yarn安装

# 全功能开启后生成的目录结构

```
- your_project_name 根路径/
  - build  webpack脚本目录
  - config  webpack配置目录
  - src 源代码
    - api api接口
    - assets 资源文件包括图片和公共样式
    - components vue公共组件
    - constant 常量目录
    - locale 多语言 语言包
    - router vue-router/路由配置
    - scripts 公共脚本目录
    - store vuex目录
    - views 页面文件
    - App.vue
    - main.js 入口文件
  - static 静态资源目录
  - .babelrc babel配置文件
  - .editorconfig 通用编辑器配置文件
  - .eslintignore eslint忽略配置
  - .eslintrc.js eslint规则文件
  - .gitignore git忽略配置
  - .postcssrc.js postcss配置
  - index.html dev模式下的模板html
  - package.json
  - production.html prodoct模式和prerender模式下的模板html
  - README.md
```

> 注意：为加快资源加载，所以将不同的资源放在了不同的cdn上，比如说打包完毕的资源放在公司自己的cdn上，一部分库文件放在了bootcdn上，所以，新建一个工程的时候注意一下本地开发时用到的库文件的版本是否与bootsdn的版本一致。

> 请查看 /yarn.lock 对比 /production.html

# 开发时设置

主要配置文件为：`/build/config/index.js`下的dev对象

主要配置项：

    host：设置为0.0.0.0可以允许所有的域名去访问你的webpack-dev-server
    
    port：webpack-dev-server的端口
    
    autoOpenBrowser：是否自动打开浏览器，基于host打开
    
    proxyTable：代理配置

```sh
npm run dev
```

## 接口设置

基于axios

解决开发时跨域：修改`/build/config/index.js`下的dev.proxyTable.target为接口服务器地址

如需添加新的接口，只需要在`/src/api/`下新建接口文件，参考example.js

建议分模块把接口拆分为不同的文件

调用：

```javascript
const login = async (username) => {
    const res = await this.$api.example.login({username: username});
    if (res.success) {
        // 一些处理函数
    }
};
```

## 常量设置

如需添加新的常量，只需要在`/src/constant/`下新建常量文件，参考example.js

建议分模块把常量拆分为不同的文件

调用：`this.$const.example.USER_LOGINED`

## 样式

默认使用scss

使用normalize.css和自定义的一些规则(`/src/assets/styles/common/reset.scss`)去重置样式

一些公共的样式可以写在`/src/assets/styles/common/layout.scss`，当然，你也可以自己去更细化的拆分css

## 资源文件

`/src/assets/`下的资源文件会进入webpack的打包流程，进行各种loader处理

`/static/`下的资源文件不会进入webpack的打包流程，打包完毕后原封不动的转移到dist目录下


## 如果是一个移动端项目

使用淘宝flexible.js去实现移动端适配，使用postcss-px2rem将px转为rem

配置文件位置： `/.postcssrc.js`

## 如果是一个多语言的项目

使用vue-i8n实现国际化，默认中文

如需添加新的语种，只需在`/src/locale/lang/`路径下新建一个文件名为语种名称的js文件

初始化位置：`/src/App.vue`

如何使用：在需要国际化的地方 `$t('l.msg.notice')`

## 如果使用vue-router

如果不是预渲染模式默认路由规则为`hash`模式

如需添加新的路由规则，只需要在`/src/router/routes/`路径下路由规则文件，请将路由按类别拆分为文件，规则参考example.js

## 如果使用vuex

强烈推荐使用vuex module去维护vuex数据，请在`/src/store/modules/`路径下创建新的vuex module，规则参考example.js

取值：`this.$store.state.example.name`

修改：`this.$store.dispatch('setExampleName', name)`


# 打包时设置

主要配置文件为：`/build/config/index.js`下的build对象

主要配置项：
    assetsPublicPath：设置为cdn的地址，用于打包版本控制

```sh
npm run build

git push

git tag 0.0.1
git push origin 0.0.1
```

# 预渲染时设置

预渲染模式时路由默认使用history模式，如需修改，请定位到`/src/router/index.js`

主要配置项：
*   步骤1：生成路由规则

    生成路由规则的配置文件：`/build/prerender.routes.js`
    生成路由规则时的接口服务器：`/src/api/axios.js`

*   步骤2：预渲染过程

    设置代理解决跨域：`/build/config/index.js`下的prerender.proxyTable.target为接口服务器地址
    设置cdn资源文件地址：`/build/config/index.js`下的prerender.assetsPublicPath

```sh
npm run prerender
```
