<template>
    <div class="Portal">
        <div class="Portal__menu"></div>
        <div class="Portal__topbar"></div>
        <div class="Portal__body">
          <slot></slot>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Portal',
  data () {
    return {
       
    }
  },
  methods: {
      getMenuData () {
          axios({
            method: 'post',
            url: 'http://localhost/index.php',
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
      this.getMenuData()
  }
}
</script>

<style scoped>
.Portal {
}

  .Portal__topbar {
    position: fixed;
    height: 50px;
    width: 100%;
    left: 0;
    top: 0;

    background-color: rgb(55, 61, 65);;
    z-index: 199307100337;
  }

  .Portal__menu {
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

  .Portal__body {
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