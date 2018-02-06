const THEATER ="THEATER"

const store ={
    namespaced: true,
    state:{
     rows:[]
    },
    mutations:{
     [THEATER](state,{data}){
         Object.assign(state,data)
     }
    },
    actions:{
         async getThertaersPage({state,commit},{page,rows,studioId,showTime}){
            
                const data=await fetch(`/schedules/getThertaersPage?&page=${page}&rows=${rows}&studioId=${studioId}&showTime=${showTime}`, {
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
            }
    }
}
  
  export default store;

