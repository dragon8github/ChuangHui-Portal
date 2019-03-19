<p align="center"><img src="http://wx3.sinaimg.cn/large/006ar8zggy1g18fkeqx4bj305k05kmx2.jpg"></p>

# Portal

📓 📔 📕 **ChuangHui**   📗 📘 📙  Vue Components. 

[Demo](https://codesandbox.io/s/9znz47q2wr?fontsize=14)

### Install

##### Using NPM

```bash
npm install chuanghui-portal
```

##### Using Yarn
```bash
yarn add chuanghui-portal
```

### Usage

main.js

```vue
import Vue from 'vue'
import App from './App'
import Portal from '@/components/chuanghui-portal.vue'

Vue.component(Portal.name, Portal)

new Vue({
  el: '#app',
  router,
  components: { App, Portal },
  template: `
  	<Portal>
  		<App/>
  	</Portal>
  `
})

```

# Contributors

李钊鸿 📧 928532756@qq.com 

[http://cylee.top](http://cylee.top)
