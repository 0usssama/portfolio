<template>
  <div id="app">
    <div style="height: 100vh" id="navbar">
      <Offcanvas></Offcanvas>

      <div uk-grid>
        <div class="uk-width-1-5@m">
          <div class="uk-visible@m uk-height-1-1" uk-sticky>
            <Navbar></Navbar>
          </div>
        </div>

        <div class="uk-width-4-5@m" :id="$route.path == '/' ? 'mainHome' : 'greyBackground'">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in"
            :duration="{ enter: 500, leave: 800 }"
            appear
          >
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Offcanvas from "./components/Offcanvas.vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Offcanvas,
    Navbar,
    Home
  }
};
</script>

<style>
.projects:hover {
  background-color: white !important;
  color: rgba(16, 29, 44, 0.96) !important;
}
#greyBackground {
  background: #edecec;
}
</style>