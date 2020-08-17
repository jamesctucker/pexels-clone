import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoritePhotos: [],
  },
  mutations: {
    addFavoritePhoto(state, photo) {
      state.favoritePhotos.push(photo);
    },
    deleteFavoritePhoto(state, photo) {
      let index = state.favoritePhotos.indexOf(photo);
      state.favoritePhotos.splice(index);
    },
  },
  actions: {
    addFavorite({ commit }, photo) {
      commit("addFavoritePhoto", photo);
    },
    deleteFavorite({ commit }, photo) {
      commit("deleteFavoritePhoto", photo);
    },
  },
  modules: {},
});
