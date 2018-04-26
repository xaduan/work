<template>
  <div id="app">
    <div class="navs">
      <router-link to="/a">Go to My</router-link>
     <router-link to="/b">Go to You</router-link>
      <router-link to="/c">Go to Her</router-link>
    </div>
    
    <!-- <link rel="stylesheet" href=""> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navs{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

}
</style>
