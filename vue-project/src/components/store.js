import Vue from 'vue'
import Vuex from 'vuex'
import users from "./app/users/store.js";
import schedules from "./app/schedules/store.js";
import scheduleMovie from "./app/scheduleMovie/store.js";
import scheduleTheater from "./app/scheduleTheater/store.js";
import showTime from "./app/showTime/store.js";
import movie from "./app/movie/store.js"
import img from "./app/imgs/store.js"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    users,
    schedules,
    scheduleMovie,
    scheduleTheater,
    showTime,
    movie,
    img
  }
})



export default store;