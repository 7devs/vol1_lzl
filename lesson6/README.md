# lesson 6 demo 目录结构

## 目录树
- demo
  - lib
    - models
      - user.js
    - routers
      - api.js
    - tool.js
  - index.js
  - package.json

## 说明
- 项目根目录下为入口文件和项目描述文件；
- lib 为私有包（库）文件夹
- lib/models   下为数据模型文件
- lib/routers  下为路由文件

## [PM2](https://www.npmjs.com/package/pm2)

- `npm install pm2 -g`
- `pm2 start index.js --watch`
- `pm2 list`
- `pm2 delete all`
