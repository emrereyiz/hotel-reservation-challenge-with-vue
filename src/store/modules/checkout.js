const state = {
  date: new Date()
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
  } 
}
const mutations = {
}
const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}