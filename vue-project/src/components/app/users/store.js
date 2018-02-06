import { resolve } from "path";
const REST = "REST"
const store ={
    namespaced: true,
    state:{
        curPage:1,
        eachPage:5,
        total:0,
        rows:[],
    },
    mutations:{
        [REST](state,{data}){
            Object.assign(state,data)
        },
        handleSizeChange(state,val){
            state.eachPage = ~~val
        },
        handleCurrentChange(state,val){
            state.curPage = ~~val
        }
    },
    actions:{
      async asyncgetEpm({state,commit}){
        const page = state.curPage;
        const rows = state.eachPage;
        const data=await fetch("/users/getEmps", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `page=${page}&rows=${rows}`
        //   credentials: 'include'
        }).then(function(response) {
            return response.json();
        })
        commit({
            type:REST,
            data
        })
        }
    }
  }
  
  export default store;