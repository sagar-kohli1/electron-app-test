
const state = {
  showLeftNav: true
}

const mutations = {
  setShowLeftNav (state, showLeftNav) {
    state.showLeftNav = showLeftNav
  }
}

const actions = {
}

const getters = {
  showLeftNav: (state) => {
    return state.showLeftNav
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
