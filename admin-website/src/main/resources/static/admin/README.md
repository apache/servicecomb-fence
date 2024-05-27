# admin
## 说明
 
此项目为tiny-toolkit-pro 套件初始化的以 TinyPro of vue 为模板的一个Vue项目，项目开发指导链接https://www.opentiny.design/vue-pro/docs/start
该项目通过tiny init pro 下载TinyPro of vue 为模板，初始化项目名admin，之后保留了项目中的src/views/login目录下的登录页面,去除了src/views目录下的其余菜单导航文件以及对应的JS文件，对 
src/views/board文件保留文件名，用导航（调用链展示）替换原始路由导航
并对不满足fence-admin项目的初始化JS文件删除，后期根据项目所需的页面以及交互在对应目录下进行封装即可。
 
## 用法
npm run start
或者 tiny start(注：需安装TinyCli脚手架，使用命令npm install @opentiny/cli -g，验证是否安装成功，可以在命令行中执行以下命令，查看 tiny 的版本：tiny -v，指导文档链接：https://www.opentiny.design/tiny-cli/docs/start)
