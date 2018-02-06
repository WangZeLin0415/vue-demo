const MOVIE = "MOVIE"
const MOVIEARR = "MOVIEARR"
const IMGPIC = "IMGPIC"
const store ={
    namespaced: true,
    state:{
     movieId:"",
     curPage:1,
     eachPage:10,
     total:0,
     rows:[],
     imgPic:{
         rows:[]
     }
    },
    mutations:{
        [IMGPIC](state,{data}){
            Object.assign(state.imgPic,data)
        },
        [MOVIE](state,{data}){
            state.movieId=data._id
        },
        [MOVIEARR](state,{data}){
            Object.assign(state,data)
        }
    },
    actions:{
         async handleSave({state,commit},{ 
            cName,
            eName,
            type,
            country,
            duration,
            release,
            avg,
            synopsis }){
                const str1 =  `${(Number(avg))/2}`
                const a1 =  str1.split(".")[0]
                let a2=""
                if(~~ str1.split(".")[1]!=0){
                    a2="5"
                }else{
                   a2="0"
                }
                let stars = a1+a2;
                const data=await fetch(`/movies/create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body:`cName=${cName}&eName=${eName}&type=${type}&country=${country}&duration=${duration}&release=${release}&avg=${avg}&stars=${stars}&synopsis=${synopsis}`
                }).then(function(response) {
                    return response.json();
                })
                commit({
                    type:"MOVIE",
                    data
                })
                
            },
           
            async getMoviesByPage({state,commit},{ 
                page,
                rows,
                }){
                    const data=await fetch(`/movies/getMoviesByPage?page=${page}&rows=${rows}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                      
                    }).then(function(response) {
                        return response.json();
                    })
                    commit({
                        type:"MOVIEARR",
                        data
                    })
                    
                },

                async remove({state,commit},{ 
                  _id
                    }){
                        const data=await fetch(`/movies/moviesDel?_id=${_id}`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                          
                        }).then(function(response) {
                            return response.json();
                        })  
                        
                        await fetch(`imgs/delMovieImg`,{
                            method:"POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body:`movieId=${_id}`
                        })
                    },

                    async handleUpdate({state,commit},{ 
                        _id,
                        cName,
                        eName,
                        type,
                        country,
                        duration,
                        release,
                        avg,
                        synopsis }){
                            const str1 =  `${(Number(avg))/2}`
                            const a1 =  str1.split(".")[0]
                            let a2=""
                            if(~~ str1.split(".")[1]!=0){
                                a2="5"
                            }else{
                               a2="0"
                            }
                            let stars = a1+a2;
                            const data=await fetch(`/movies/updateMovie`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body:`_id=${_id}&cName=${cName}&eName=${eName}&type=${type}&country=${country}&duration=${duration}&release=${release}&avg=${avg}&stars=${stars}&synopsis=${synopsis}`
                            }).then(function(response) {
                                return response.json();
                            })
                        },

                        //getImg getImgsByMovieId

                        async getImg({state,commit},{ 
                            page,
                            rows,
                            movieId
                            }){
                                const data=await fetch(`/imgs/getImgsByMovieId?page=${page}&rows=${rows}&movieId=${movieId}`, {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    },
                                  
                                }).then(function(response) {
                                    return response.json();
                                })
                                commit({
                                    type:"IMGPIC",
                                    data
                                })
                                
                            },

                           
                            async handleRemove({state,commit},{ 
                                imgId,   
                                movieId
                                }){
                                    const data=await fetch(`/imgs/delImg`, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        },
                                        body:`imgId=${imgId}`
                                      
                                    }).then(function(response) {
                                        return response.json();
                                    })

                                    await fetch('movies/imgDel',{
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        },
                                        body:`imgId=${imgId}&_id=${movieId}`
                                    })
                                    
                                },
    }
}
  
  export default store;

