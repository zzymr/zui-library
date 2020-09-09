// 为组件提供 install 方法，供组件对外按需引入
import ZTest from "./src/test";
ZTest.install = Vue => {
  Vue.component(ZTest.name, ZTest);
};
export default ZTest;