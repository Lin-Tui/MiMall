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
    this.getUser(); 
    this.getCartCount();
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res = {}) => {
      this.$store.dispatch('saveUserName', res.username);
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
         this.$store.dispatch('saveCartCount', res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';
@import './assets/scss/config.scss';
</style>
