<template>
  <div id="fc-app">
    <div class="container-fluid">
      <div class="row">
        <div id="fc-app-side-nav" v-if="showLeftNav">
          <SideNav :navLinks="links" :enableSideNav="true" :forceBack="{enabled: false}"></SideNav>
        </div>
        <div id="fc-app-routing-wrapper" v-bind:class="wrapperClasses" class="card ml-10 mr-10">
          <div class="card-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SideNav from '@/components/layouts/SideNav'
  import auth from './auth'
  export default {
    name: 'shipbob-backoffice-app',
    components: { SideNav, auth },
    created: function () {
      if (!this.isAuthenticated()) {
        // this.$router.go('authenticate')
      }
    },
    data () {
      return {
        links: [
          {
            name: 'Receiving',
            href: 'receiving',
            icon: '',
            show: true
          }
        ]
      }
    },
    computed: {
      showLeftNav () {
        return this.$store.getters['global/showLeftNav']
      },
      wrapperClasses () {
        return {
          'fc-app-routing-wrapper-leftnav-show': this.showLeftNav,
          'fc-app-routing-wrapper-leftnav-hide': !this.showLeftNav
        }
      }
    },
    methods: {
      isAuthenticated () {
        return auth.user.authenticated
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/app.scss';
  @import '../../node_modules/toastr/toastr.scss';

  #fc-app{
    height: 100vh;
    background-color: #EAEAEA;
  }
  #fc-app-side-nav {
    width: 240px;
    height: 100vh;
  }
  .fc-app-routing-wrapper-leftnav-show {
    width: calc(100% - 260px);
    height: 100vh;
  }
  .fc-app-routing-wrapper-leftnav-hide {
    width: 100%;
    height: 100vh;
  }
  
</style>