<template>
  <div id="wrapper" class="appWrapper">
    <div class="title">Inventory Items for Box Scan: {{boxId}}</div>
    <sb-table :columns="WROBoxItemCols" :data="WROBoxItemsData" :mappers="WROBoxItemsMappers"></sb-table>
  </div>
</template>

<script>
  import Script from './Script'
  export default Script
</script>