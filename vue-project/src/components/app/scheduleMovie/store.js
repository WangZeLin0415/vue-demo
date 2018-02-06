import { resolve } from "path";
const SCHEDULES = "SCHEDULES"
const store ={
    namespaced: true,
    state:{
     rows:[]
    },
    mutations:{
       [SCHEDULES](state,{data}){
           Object.assign(state,data)
       }
    },
    actions:{
        async getSchedulesMovie({state,commit},{page,rows,movieId,showTime}){
            const data=await fetch(`/schedules/getSchedulesMovie?&page=${page}&rows=${rows}&movieId=${movieId}&showTime=${showTime}`, {
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
    },
}
  
  export default store;