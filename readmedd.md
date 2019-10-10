# 搭建环境

## webpack 全家桶

```shell
npm install webpack webpack-cli webpack-dev-server
```

## babel

```shell
npm install --save-dev babel-loader @babel/core
cnpm install --save-dev @babel/preset-react
cnpm i @babel/preset-env -D
```

```shell
// babel.config.js
module.exports = {
  presets: ['@babel/preset-env']
};
```

## typescript

```shell
npm i typescript ts-loader  -D
npm i @types/react @types/react-dom -D

```

## react
```shell
cnpm i react react-dom -S

```


## styleguide
```shell
cnpm i react-docgen react-docgen-typescript -D
```