const state = {
  activeStep: null
}
const getters = {
  getActiveStep (state) {
    return state.activeStep
  }
}
const mutations = {
  setActiveStep (state, payload) {
    state.activeStep = payload
  }
}
const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}