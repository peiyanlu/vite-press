import {Theme} from "vitepress";
import DefaultTheme from "vitepress/theme";

// 样式文件
import './style/index'

// 公共组件


export default <Theme>{
  ...DefaultTheme,
  enhanceApp({app}) {
    // app.component()
  }
}