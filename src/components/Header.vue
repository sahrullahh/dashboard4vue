<template>
  <div id="header">
    <header class="header">
      <div class="flex-header">
        <div class="col-head">
          <div class="input-box-search">
            <div class="col-input">
              <button class="bar"><fa :icon="['fas', 'bars']" /></button>
            </div>
            <div class="col-input">
              <button><fa :icon="['fas', 'search']" /></button>
            </div>
            <div class="col-input">
              <input type="search" placeholder="Search..." />
            </div>
          </div>
        </div>
        <div class="col-head"></div>
        <div class="col-head">
          <div class="account-head">
            <div class="account-body">
              <h3>Moh Sahrullah</h3>
              <p>Programmer</p>
            </div>
            <img src="../assets/img/me-green.png" alt="Mohammad Sahrullah" />
            <span class="caret">
              <fa icon="caret-down" />
            </span>
          </div>
        </div>
        <!-- <div class="col-head">
          <div class="logout">
            <router-link to="">
              <fa :icon="['fas', 'sign-out-alt']" />
            </router-link>
          </div>
        </div> -->
      </div>
    </header>
  </div>
</template>
