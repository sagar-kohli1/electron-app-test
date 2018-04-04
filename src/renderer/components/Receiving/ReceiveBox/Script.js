import SbTable from '../../utils/SbTable'

export default {
  name: 'wroboxitems',
  created: async function () {
    // Remove this call when it is populated by the previous scan screen; test only
    this.$store.dispatch('receiving/getWROInventoryBoxDetail', this.boxId)
  },
  props: ['boxId'],
  data () {
    return {
      rowData: []
    }
  },
  computed: {
    WROBoxItemCols () {
      return [
        'Item ID',
        'Item Name',
        'Lot Number',
        'Lot Date',
        'Photo',
        'Expected',
        'Received',
        'Dangerous Goods'
      ]
    },
    WROBoxItemsMappers () {
      return [
        'InventoryId',
        'ItemName',
        'LotNumber',
        'LotDate',
        'ImageUrl',
        'Quantity',
        'ReceivedQuantity',
        'Hazmat'
      ]
    },
    WROBoxItemsData () {
      return this.$store.getters['receiving/wroInventoryBoxDetail']
    }
  },
  components: {
    'sb-table': SbTable
  }
}
