import axios from 'axios'

export const state = () => ({
  timeline: []
})

export const mutations = {
  setTimeline(state, payload) {
    state.timeline = payload
  }
}

export const actions = {
  async getTimeline({ commit }) {
    const { data } = await axios.get(
      process.env.apiBaseUrl + 'developer-timeline',
      { params: { reverse: '0' } }
    )
    if (data.data.length > 0) {
      commit('setTimeline', data.data)
    }
  }
}
