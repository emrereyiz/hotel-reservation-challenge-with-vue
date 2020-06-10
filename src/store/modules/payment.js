const state = {
  cardDetail: {
    name: null,
    number: null,
    date: null,
    cvc: null
  }
}
const getters = {
  getCard (state) {
    return state.cardDetail
  }
}
const mutations = {
  setCard (state, payload) {
    return state.cardDetail = payload
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