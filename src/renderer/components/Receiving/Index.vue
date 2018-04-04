<template>
  <div id="wrapper">
    <div class="form-group">
      <div class='receiving-block'>
          <a v-on:click="openlink('receivingstartscan')" class="btn btn-primary btn-receiving">Start Receiving</a>       
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    methods: {
      openlink (path) {
        this.$router.push({name: path, params: {}})
      }
    }
  }
</script>
<style scoped lang="scss">
    .receiving-block{
        margin-top: 37vh;
        color: #fff;
        margin-left: 39%; 
    }

    .btn-receiving{
        width: 300px;
        height: 86px;
        padding-top: 27px;
        font-size: 23px;
    }
</style>