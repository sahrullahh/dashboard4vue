<template>
  <div id="app">
    <div class="flex-box">
      <div class="col-box">
        <Navbar />
      </div>
      <div class="col-box">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  data() {},
  methods: {},
  components: {
    Navbar,
  },
  mounted() {},
};
</script>
