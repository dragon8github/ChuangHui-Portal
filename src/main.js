import Vue from 'vue'
import App from './App'
import router from './router'
import Portal from 'Portal'

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
