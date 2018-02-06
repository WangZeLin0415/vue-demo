import { resolve } from "path";
const IMGID = "IMGID"
const store ={
    namespaced: true,
    state:{
     imgId:"",
     movieId:""
    },
    mutations:{
        [IMGID](state,{data}){
            Object.assign(state,data)
        }
    },
    actions:{
        async successBot({state,commit},{ 
            movieId,
            url,
            type
            }){
                const data=await fetch(`/imgs/create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body:`movieId=${movieId}&url=${url}&type=${type}`
                }).then(function(response) {
                    return response.json();
                })
                
              const imgId = data._id
              const movieId1 = data.movieId
               
              await fetch(`movies/addImgs`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                    },
                body:`movieId=${movieId}&imgId=${imgId}`
              })
                
            }
    },
}
  
  export default store;