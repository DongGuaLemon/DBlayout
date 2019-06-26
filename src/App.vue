<template>
  <div id="app">
    <div style="width:100%;">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/">資料庫分析與實作-DEMO網站</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/input">新增</b-nav-item>
            <b-nav-item to="/create">創立</b-nav-item>
            <b-nav-item to="/selectpage">查詢</b-nav-item>
            <b-nav-item to="/delpage">刪除</b-nav-item>
          </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

</style>
