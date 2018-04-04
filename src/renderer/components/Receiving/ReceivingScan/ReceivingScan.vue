<template>
  <div>
    <h3 class="card-title">Receiving Scan</h3>
    <p class="card-subtitle mb-2 text-muted mb-10">Scan WRO, URO, or Tracking Numbers</p>
    <p class="card-text mb-50">
      <i>Note</i>, you can also hit enter or use a scan tool instead of typing into the provided text boxes</p>
    <div class="container-fluid">
      <form role="form" class="form-horizontal">
        <div class="row ml-50">
          <div class="col-sm-3">
            <h3>WRO</h3>
            <div class="input-group input-group-xs mb-3 pr-10">
              <input class="form-control" placeholder="EG: 123456 1" v-model="wroId" type="text" @keyup.enter="scan(wroId, 'wro')">
              <div class="input-group-append">
                <button v-on:click="scan(wroId, 'wro')" class="btn btn-outline-secondary" type="button">Scan</button>
              </div>

            </div>
          </div>
          <div class="col-sm-3">
            <h3>URO</h3>
            <div class="input-group input-group-xs mb-3 pr-10">
              <input class="form-control" placeholder="EG: 1234567" v-model="uroId" type="text" @keyup.enter="scan(uroId, 'uro')">
              <div class="input-group-append">
                <button v-on:click="scan(uroId, 'uro')" class="btn btn-outline-secondary" type="button">Scan</button>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <h3>Tracking Number</h3>
            <div class="input-group input-group-xs mb-3 pr-10">
              <input class="form-control" placeholder="EG: 1Z1909397992997919" v-input="trackingId" type="text" @keyup.enter="scan(trackingId, 'tracking')">
              <div class="input-group-append">
                <button v-on:click="scan(trackingId, 'tracking')" class="btn btn-outline-secondary" type="button">Scan</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import scripts from './script'
export default scripts
</script>
