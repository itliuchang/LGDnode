# LGDnode
一个nodejs写的微信端学生信息管理系统
1.使用Express框架，当前代码只是V－C层，数据接口是写在另外一台服务器上
2.目录
  config：路由表，api地址，和应用的全局变量
  controller：控制器
  node_modules：应用里需要加载的node模块
  proxy：数据代理，负责去向api拿数据
  public：存放静态文件
  app.js：入口文件
  gulpfile.js：用于git远程update，并发布
  package.json：应用的配置文件
PS：此项目只是为了熟悉node的使用而写的demo，可能会有很多问题，希望大家多多包涵！
如果有问题想探讨可以发邮件到lc@yoyoplay.cn
