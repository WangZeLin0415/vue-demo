import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Reg from "../components/app/reg"
import Login from "../components/app/login"
import Info from "../components/app/info"
import Users from "../components/app/users/users"
import Movie from "../components/app/movie/movie"
import MovieList from "../components/app/movie/movieList"
import Studio from "../components/app/studio/studio"
import StudioList from "../components/app/studio/studioList"
import Theather from "../components/app/theather/theather"
import TheatherList from "../components/app/theather/theatherList"
import Schedule from "../components/app/schedules/schedules"
import ScheduleList from "../components/app/schedules/schedulesList"


Vue.component("Reg",Reg)
Vue.component("Login",Login)
Vue.component("Users",Users)
Vue.component("Movie",Movie)
Vue.component("MovieList",MovieList)
Vue.component("Studio",Studio)
Vue.component("StudioList",StudioList)
Vue.component("Theather",Theather)
Vue.component("TheatherList",TheatherList)

Vue.component("Schedule",Schedule)
Vue.component("ScheduleList",ScheduleList)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
      children: [
        {
          path: "users",
          name: "Users",
          component: Users
        },
        {
          path: "movie",
          name: "Movie",
          component: Movie
        },
        {
          path: "movieList",
          name: "MovieList",
          component: MovieList
        },
        {
          path: "studio",
          name: "Studio",
          component: Studio
        },
        {
          path: "studioList",
          name: "StudioList",
          component: StudioList
        },
        {
          path: "theather",
          name: "Theather",
          component: Theather
        },
        {
          path: "theatherList",
          name: "TheatherList",
          component: TheatherList
        },
        {
          path: "schedule",
          name: "Schedule",
          component: Schedule
        },
        {
          path: "scheduleList",
          name: "ScheduleList",
          component: ScheduleList
        },
      ]
    }
  ]
})
