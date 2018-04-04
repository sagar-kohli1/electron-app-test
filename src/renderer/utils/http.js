import Vue from 'vue'
import toastr from 'toastr'
export const HttpUtil = {
  OpenRequests: {},
  Get: async (request, cancelToken = null) => {
    try {
      return await Vue.axios({
        url: request.Url,
        params: request.Params,
        method: 'GET'
      })
    } catch (error) {
      console.error('failed to fetch: ' + error)
      return error
    }
  },
  OnCancel: (thrown) => {
    if (Vue.axios.isCancel(thrown)) {
      console.log('request cancelled')
    }
  },
  Post: async function (request, cancelToken = null) {
    try {
      if (this.OpenRequests[request.Url] === undefined) {
        this.OpenRequests[request.Url] = 1
      } else {
        this.OpenRequests[request.Url]++
      }
      let res = cancelToken != null
        ? await Vue.axios.post(request.Url, request.Data, {cancelToken: cancelToken})
          .catch(this.OnCancel)
        : await Vue.axios.post(request.Url, request.Data)
      this.OpenRequests[request.Url]--
      return res
    } catch (error) {
      console.error('failed to post: ' + error)
      return error
    }
  },
  Put: async (request) => {
    try {
      return await Vue.axios({
        url: request.Url,
        data: request.Data,
        method: 'PUT'
      })
    } catch (error) {
      console.error('failed to put: ' + error)
      return error
    }
  },
  Delete: async (request) => {
    try {
      return await Vue.axios({
        url: request.Url,
        data: request.Data,
        method: 'DELETE'
      })
    } catch (error) {
      console.error('failed to delete: ' + error)
      return error
    }
  },
  SendRequest: async function (action, url, data) {
    toastr.info('Processing...')
    let request = action === 'GET' ? {
      Url: url,
      Params: data
    } : {
      Url: url,
      Data: data
    }
    let res = null
    switch (action) {
      case 'GET' : {
        res = await this.Get(request)
        break
      }
      case 'POST' : {
        res = await this.Post(request)
        break
      }
      case 'PUT' : {
        res = await this.Post(request)
        break
      }
      case 'DELETE' : {
        res = await this.Delete(request)
        break
      }
      default: {
        console.error('invalid HTTP method')
      }
    }
    toastr.clear()
    return res
  },
  CancelPendingRequests: async (cancel) => {
    cancel()
  }
}
