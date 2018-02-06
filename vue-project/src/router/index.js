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
import ScheduleMovie from "../components/app/scheduleMovie/scheduleMovie"
import ScheduleTheater from "../components/app/scheduleTheater/scheduleTheater"
import ShowTime from "../components/app/showTime/showTime"
import Img from "../components/app/imgs/imgs"
import SeachPic from "../components/app/movie/seachPic"

Vue.component("Reg",Reg)
Vue.component("Login",Login)
Vue.component("Users",Users)
Vue.component("Movie",Movie)
Vue.component("MovieList",MovieList)
Vue.component("Studio",Studio)
Vue.component("StudioList",StudioList)
Vue.component("Theather",Theather)
Vue.component("TheatherList",TheatherList)
Vue.component("ScheduleMovie",ScheduleMovie)
Vue.component("ShowTime",ShowTime)
Vue.component("Schedule",Schedule)
Vue.component("ScheduleList",ScheduleList)
Vue.component("ScheduleTheater",ScheduleTheater)
Vue.component("Img",Img)
Vue.component("SeachPic",SeachPic)

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
        {
          path: "scheduleMovie/:movieId/:showTime",
          name: "ScheduleMovie",
          component: ScheduleMovie
        },
        {
          path: "scheduleTheater/:studioId/:showTime",
          name: "ScheduleTheater",
          component: ScheduleTheater
        },
        {
          path: "showTime/:theaterId/:showTime",
          name: "ShowTime",
          component: ShowTime
        },
        {
          path: "imgs/:movieId",
          name: "Img",
          component: Img
        },
        {
          path: "seachPic/:_id",
          name: "SeachPic",
          component: SeachPic
        },
      ]
    }
  ]
})
