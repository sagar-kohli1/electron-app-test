import ReceivingService from '../../services/receiving'

const state = {
  wroInventoryBoxDetail: {}
}

const mutations = {
  setWROInventoryBoxDetail (state, wroInventoryBoxDetail) {
    state.wroInventoryBoxDetail = wroInventoryBoxDetail
  }
}

const actions = {
  async getWROInventoryBoxDetail (context, boxScan) {
    const wroInventroyBoxDetailData = await ReceivingService.getWROInventoryBoxDetail(boxScan)
    if (wroInventroyBoxDetailData) {
      context.commit('setWROInventoryBoxDetail', wroInventroyBoxDetailData)
    }
  }
}

const getters = {
  wroInventoryBoxDetail: (state) => {
    return state.wroInventoryBoxDetail
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
