<template>
  <div>
    <table id="sbTable" class="table" :style="styleObject">
      <thead>
        <tr scope="row">
          <th :title="c" :id="'col_'+ index" v-for="(c, index) in columns" :key="'col_'+ index" scope="col">{{c}}</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(r, index) in data">
          <tr v-if="data && data.length > 0" :key="'row_'+ index" scope="row">
            <td :id="index + '_' + i" :title="r[i]" scope="col" :class="mappers[i]" v-for="(vc, i) in columns" :key="'row_col_'+ i">
              <span :title="r[mappers[i]]" v-if="!templates || !templates[mappers[i]]">{{r[mappers[i]]}}</span>
              <component v-else :is="templates[mappers[i]]" @toggle-nested-row="handleToggleNestedRow" :row="r" :vc="vc" :mapper="mappers[i]"></component>
            </td>
          </tr>
          <tr :key="'nested_row_'+ index">
            <td colspan="100%" class="no-border no-padding allow-overflow">
              <expand-transition :key="'nested_row_'+ index">
                <component v-if="nestedRowTemplate && r.toggle" :key="'nested_row_'+ index" :is="nestedRowTemplate" :row="r"></component>
              </expand-transition>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'SbTable',
  props: ['columns', 'data', 'mappers', 'templates', 'styleObject', 'nestedRowTemplate'],
  methods: {
    handleToggleNestedRow (rowId) {
      this.$emit('toggle-nested-row', rowId)
    }
  }
}
</script>
<style scoped lang="scss">
tbody {
  height: 300px;
  overflow: hidden;
   &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: none;
        border-radius: 0;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background: #ebecee;
        opacity: 0.5;
        -webkit-box-shadow: none;

        &:hover{
            background: #8c929a;
        }
    }
}
// #sbTable {
//     .table__cell {
//         max-width: 0px;
//         min-width: 0px;
//   }
// }
@media only screen and (max-width: 1000px) {
   #sbTable {
      width: 90vw;
   }
}

.no-border {
  border-top: none;
}
.no-padding {
  padding: 0;
}

.allow-overflow {
  overflow: visible;
}

.toggle {
  width: 25px;
}
.table-responsive {
  overflow-x: initial;
}
</style>
