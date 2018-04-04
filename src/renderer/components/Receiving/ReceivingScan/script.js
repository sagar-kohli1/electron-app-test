export default {
  name: 'ReceivingScan',
  data () {
    return {
      trackingId: null,
      uroId: null,
      wroId: null
    }
  },
  methods: {
    scan: function (id, type) {
      console.log('Scan was called', id, type)
    }
  }
}
