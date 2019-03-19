<template>
    <div class="chuanghui-portal">
        <div class="chuanghui-portal__menu"></div>
        <div class="chuanghui-portal__topbar"></div>
        <div class="chuanghui-portal__body">
          <slot></slot>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'chuanghui-portal',
  data () {
    return {
       api: 'http://localhost'
    }
  },
  methods: {
      getMenuData () {
          axios({
            method: 'post',
            url: `${url}/index.php`,
          }).then(response => {
            console.log(response)
          })
      }
  },
  components: {

  },
  computed: {

  },
  watch: {

  },
  beforeMount () {
      // this.getMenuData()
  }
}
</script>

<style scoped>
.chuanghui-portal {
}

  .chuanghui-portal__topbar {
    position: fixed;
    height: 50px;
    width: 100%;
    left: 0;
    top: 0;

    background-color: rgb(55, 61, 65);;
    z-index: 199307100337;
  }

  .chuanghui-portal__menu {
    position: fixed;
    width: 50px;
    top: 50px;
    bottom: 0;
    left: 0;

    overflow: hidden;
    z-index: 199307100337;
    background-color: #252a2f;
    transition: all .3s cubic-bezier(0,0,.2,1);
  }

  .chuanghui-portal__body {
    position: absolute;
    top: 50px;
    left: 50px;
    right: 0px;

    width: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>