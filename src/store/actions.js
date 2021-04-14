import {
  fetchMain
} from '../api'

export default {
  fetchMain ({ commit }, obj) {
    let id = obj.name
    let videoId = obj.id
    return fetchMain(id, videoId).then(item => {
      item = item.data
      commit('setItem', { id, item })
    })
  }
}
