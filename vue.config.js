/*
 * @Author: Yokee
 * @Date: 2020-11-16 10:44:48
 * @LastEditTime: 2020-11-19 18:31:31
 * @FilePath: \admin\vue.config.js
 */

const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  lintOnSave: false,//关闭eslint
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src")); // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  configureWebpack: {
    resolve: {
      extensions: ["js", "vue"],
      alias: {
        "@": resolve("src")
      }
    }
  }
};
