<template>
  <div id="app">
    <div class="flex-box">
      <div class="col-box">
        <Navbar />
      </div>
      <div class="col-box">
        <Header />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import Scrollbar from "smooth-scrollbar";
export default {
  data() {},
  methods: {},
  components: {
    Navbar,
    Header,
    Footer,
  },
  mounted() {},
};
</script>
