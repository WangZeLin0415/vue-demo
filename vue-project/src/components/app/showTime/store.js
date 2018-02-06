const THEATER ="THEATER"

const store ={
    namespaced: true,
    state:{
     rows:[]
    },
    mutations:{
     [THEATER](state,{data}){
         Object.assign(state,data)
     },
    

    },
    actions:{
         async getShowTime({state,commit},{page,rows,theaterId,showTime}){
           
                const data=await fetch(`/schedules/getShowTime?&page=${page}&rows=${rows}&theaterId=${theaterId}&showTime=${showTime}`, {
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
         async handleClickDel({state,commit},{showTime}){
                const data=await fetch(`/schedules/remove?&showTime=${showTime}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                }).then(function(response) {
                    return response.json();
                })
                
            }
    }
}
  
  export default store;

