import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase"

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
      profile: null
    },
  },
  mutations: {
    SET_USER(state, payload) {
      return state.user.data = payload
    },
    SET_USER_PROFILE(state, payload) {
      return state.user.profile = payload
    },
  },
  actions: {
    fetchUser(context) {
      // Check for auth
      const user = firebase.auth().currentUser
      if (user) {
        firebase.firestore().collection('users')
          .doc(user.uid)
          .onSnapshot((doc) => {
            if (doc.exists) {
              context.commit('SET_USER_PROFILE', doc.data())
            }
          })
        context.commit('SET_USER', user)
        context.commit('SET_LOGGED_IN', true)
      } else {
        context.commit('SET_LOGGED_IN', false)
      }
    },
    setUserProfile(context, userProfile) {
      context.commit('SET_USER_PROFILE', userProfile)
    },
  },
  getters: {
    user(state) {
      return state.user
    }
  },
})
export default store