export default {
  setCounter(state, payload) {
    state.vcounter = payload
  },
  addCounter(state, payload) {
    state.vcounter += payload
  },
  setApiResult(state, payload) {
    state.apiresult = payload
  },
  setApiPostResult(state, payload) {
    state.apipostresult = payload
  },
}
