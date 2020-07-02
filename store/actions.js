export default {
  async setCounter({ commit }, payload) {
    await commit('setCounter', payload)
  },
  async addCounter({ commit }, payload) {
    await commit('addCounter', payload)
  },
  async apiCall({ commit }, payload) {
    let ret = {}
    ret = await this.$axios.get('https://jsonplaceholder.typicode.com/todos/1')
    await commit('setApiResult', ret)
  },
  async apiCallPost({ commit }, payload) {
    let ret = {}
    ret = await this.$axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      payload
    )
    await commit('setApiPostResult', ret)
  },
}
