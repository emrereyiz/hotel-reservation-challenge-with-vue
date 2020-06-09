const state = {
  date: new Date(),
  checkinDate: null,
  checkoutDate: null
}
const getters = {
  minDate (state) {
    var _date = state.date
    _date.setDate(_date.getDate() + 0)
    var month = '' + (_date.getMonth() + 1)
    var day = '' + _date.getDate()
    var year = _date.getFullYear()

    if (month.length < 2) { month = '0' + month }
    if (day.length < 2) { day = '0' + day }
    return [year, month, day].join('-')
  },
  getCheckinDate (state) {
    return state.checkinDate
  },
  getCheckoutDate (state) {
    return state.checkoutDate
  }
}
const mutations = {
  setCheckinDate (state, payload) {
    state.checkinDate = payload
  },
  setCheckoutDate (state, payload) {
    state.checkoutDate = payload
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