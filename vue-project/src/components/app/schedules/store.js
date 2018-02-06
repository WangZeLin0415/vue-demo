import { resolve } from "path";
const REST = "REST"
const STUDIO = "STUDIO"
const THEATER = "THEATER"
const SCHEDULES = "SCHEDULES"
const store ={
    namespaced: true,
    state:{
      rows:[],
      studio:{
          rows:[]
      },
      theater:{
          data:[]
      },
      schedules:{
          rows:[]
      },
      movieId:""
    },
    mutations:{
        [SCHEDULES](state,{data}){
            Object.assign(state.schedules,data)
        },
        [REST](state,{data}){
            Object.assign(state,data)
        },
        [STUDIO](state,{data}){
            Object.assign(state.studio,data)
         
            
        },
        [THEATER](state,{data}){
            Object.assign(state.theater,{data})
        },
    },
    actions:{
        async getMovie({state,commit}){
            const data=await fetch("/movies/getMovieByPage1", {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            }).then(function(response) {
                return response.json();
            })
            commit({
                type:REST,
                data
            })
            },

            async getStudio({state,commit}){
                const data=await fetch("/studios/getStudiosByPage", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                }).then(function(response) {
                    return response.json();
                })
                commit({
                    type:STUDIO,
                    data
                })
            },

            async getTheater({state,commit},{studioId}){
                const data=await fetch(`/theaters/getTheaterByPage?studioId=${studioId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                }).then(function(response) {
                    return response.json();
                })
                commit({
                    type:THEATER,
                    data
                })
            },

            async asyncCreate({state,commit},{ 
                    studioId,
                    movieId,
                    theaterId,
                    showTime,
                    price}){
                    const data=await fetch("/schedules/create", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `studioId=${studioId}&movieId=${movieId}&theaterId=${theaterId}&showTime=${showTime}&price=${price}`
                    //   credentials: 'include'
                    }).then(function(response) {
                        return response.json();
                    })
                },
                async getSchedules({state,commit},{page,rows,showTime}){
                    const data=await fetch(`/schedules/getSchedulesByPage?&page=${page}&rows=${rows}&showTime=${showTime}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                    }).then(function(response) {
                        return response.json();
                    })
                    commit({
                        type:SCHEDULES,
                        data
                    })
                },
    }
  }
  
  export default store;