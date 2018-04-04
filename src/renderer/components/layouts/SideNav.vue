<template>
  <div class="primary-sidebar-wrapper appmenu">
    <nav class="navbar side-bar-brand-header">
      <a class="logo applogo" href="#">
        <img src="https://d33wubrfki0l68.cloudfront.net/221426b90a11dfca9e3a2a51195fa5ea4ec42a4a/2cf63/images/logo.svg" alt="ShipBob">
      </a>
    </nav>    
    <nav v-if="!forceBack.enabled" class="nav flex-column nav-pills primary-nav" id="primary-nav">
      <div class="custom-scroll">
        <a v-for="(link, index) in navLinks" v-if="link.show" :key="index" v-bind:class="link.icon" class="nav-link collapsed" href="#" @click="navigate(link)">{{ link.name }}</a>
      </div>
    </nav>
	<nav v-else class="nav flex-column nav-pills primary-nav" id="primary-nav">
      <div class="custom-scroll">
        <a class="nav-link collapsed" href="#" @click.prevent="goBack">{{ forceBack.text }}</a>
      </div>
    </nav>   
    <nav class="navbar side-bar-account-footer">
      <a class="logout" v-on:click="logout"></a>
      <a class="your-account" v-on:click="closeme">  
        Exit
      </a>
    </nav>
  </div>
</template>

<script>
import auth from '../../auth'
export default {
  name: 'SideNav',
  props: {
    navLinks: {
      type: Array,
      required: true
    },
    forceBack: {
      type: Object,
      required: true
    }
  },
  methods: {
    goBack () {
      this.$router.go(this.forceBack.distance)
    },
    extractHref (link) {
      if (link.href === null || typeof link.href === 'undefined') return '#'
      return link.href
    },
    navigate (link) {
      this.$router.push({name: link.href})
    },
    closeme () {
      const remote = require('electron').remote
      remote.getCurrentWindow().close()
    },
    logout () {
      auth.logout()
    }
  }
}
</script>

<style scoped lang="scss">
  .primary-sidebar-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .expand {
    flex: 1;
  }

  .custom-scroll {
    height: 100%;
    max-width: 100%;

    overflow: auto;
     &::-webkit-scrollbar {
        width: 7px;
        height: 7px;

    }

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: none;
        border-radius: 0;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background: #1A5382;
        opacity: 0.5;
        -webkit-box-shadow: none;

        &:hover{
          background: #333D4D;
        }
    }
  }

  .appmenu{
    width:240px;
    float: left;
  }

  .applogo{
    width:100% !important;
  }
</style>
