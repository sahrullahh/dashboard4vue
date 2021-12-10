<template>
  <div id="home">
    <Header />
    <div class="container">
      <div class="box-v1">
        <div class="head-box-v1">
          <div class="wrap-head">
            <h2>Dashboard</h2>
            <span></span>
            <p>Realtime storage data monitoring</p>
          </div>
          <div class="wrap-head">
            <div class="wrap-button">
              <button>Manage dashbord</button>
              <button>Create new dashbord</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
