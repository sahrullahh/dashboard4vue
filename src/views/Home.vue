<template>
  <div id="home">
    <div id="my-scrollbar">
      <div class="container">
        <div class="box-v1">
          <div class="head-box-v1">
            <div class="wrap-head">
              <h2>Dashboard</h2>
              <span></span>
              <p>Realtime cloud storage data monitoring</p>
            </div>
            <div class="wrap-head">
              <div class="wrap-button">
                <button class="btn-solid">
                  <fa :icon="['fas', 'fire']" />
                  <span class="text">Upgrade to Pro</span>
                </button>
                <button class="btn-outline">
                  <fa :icon="['fas', 'cog']" />
                  <span class="text">Manage Storage</span>
                </button>

                <button class="btn-solid">
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
                      <p>all files</p>
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
                      <p>used space</p>
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
                      <p>free space</p>
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
                      <p>capacity of storage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper-card-graph">
            <div class="card">
              <div class="head-card">
                <h2>Cloud storage</h2>
              </div>
              <div class="body-card">
                <canvas id="myChart"></canvas>
                <br /><br />
              </div>
            </div>
            <div class="card">
              <div class="head-card">
                <h2>Due date of storage</h2>
              </div>
              <div class="body-card">
                <canvas id="barChart" width="700" height="400"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Scrollbar from "smooth-scrollbar";
export default {
  name: "Home",
  components: {
    // Header,
    Footer,
  },
  mounted() {
    Scrollbar.init(document.querySelector("#my-scrollbar"));
  },
};
</script>
