<template>
  <div>
      <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/2-2">2-2</router-link> |
        <router-link to="/2-3">2-3</router-link> |
      </nav> -->
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
