import toastr from 'toastr'
// import { HttpUtil } from '../utils.http'

export default class ReceivingService {
  static async getWROInventoryBoxDetail (boxScan) {
    // const request = {
    //   Url: '/api/receiving/boxDetail'
    // }
    // const res = await HttpUtil.Get(request)
    const res = {data: [
      {
        InventoryId: 1,
        ItemName: 'Item #1',
        LotNumber: null,
        LotDate: null,
        ImageUrl: '',
        Quantity: 20,
        ReceivedQuantity: 30,
        Hazmat: false,
        IsImageUploaded: false
      },
      {
        InventoryId: 2,
        ItemName: 'Item #2',
        LotNumber: '12345',
        LotDate: '12-18-2020',
        ImageUrl: '',
        Quantity: 30,
        ReceivedQuantity: 30,
        Hazmat: true,
        IsImageUploaded: false
      }
    ]}
    if (!res.data) {
      toastr['error']('Error occurred!')
      return {}
    } else {
      return res.data
    }
  }
}
