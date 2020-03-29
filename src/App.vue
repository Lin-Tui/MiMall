<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import storage from './storage' 
export default {
  name: 'App',
  components: {
  },
  data() {
    return { 
      res: {}
    }
  },
  mounted() {
   this.axios.get('/user/login').then((res) => {
     this.res = res;
   }) 
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';
@import './assets/scss/config.scss';
</style>
