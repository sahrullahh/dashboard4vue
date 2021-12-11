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
              <button>
                <fa :icon="['fas', 'cog']" />
                <span class="text">Manage Storage</span>
              </button>
              <button>
                <fa :icon="['fas', 'upload']" /><span class="text"
                  >Upload your file</span
                >
              </button>
            </div>
          </div>
        </div>
        <div class="wrapper-card">
          <div class="grid-container">
            <div class="card">
              <div class="body-card">
                <div class="flex-card">
                  <div class="col">
                    <div class="icon-circle">
                      <fa :icon="['fas', 'file']" />
                    </div>
                  </div>
                  <div class="col">
                    <h2>57</h2>
                    <p>Files</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="body-card">
                <div class="flex-card">
                  <div class="col">
                    <div class="icon-circle">
                      <fa :icon="['fas', 'arrow-down']" />
                    </div>
                  </div>
                  <div class="col">
                    <h2>2.0 GB</h2>
                    <p>Used space</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="body-card">
                <div class="flex-card">
                  <div class="col">
                    <div class="icon-circle">
                      <fa :icon="['fas', 'arrow-up']" />
                    </div>
                  </div>
                  <div class="col">
                    <h2>9.0 GB</h2>
                    <p>Free space</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="body-card">
                <div class="flex-card">
                  <div class="col">
                    <div class="icon-circle">
                      <fa :icon="['fas', 'folder']" />
                    </div>
                  </div>
                  <div class="col">
                    <h2>10 GB</h2>
                    <p>Capacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper-card-graph">
          <div class="card">
            <canvas id="myChart" width="400" height="200"></canvas>
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
  mounted() {},
};
</script>
