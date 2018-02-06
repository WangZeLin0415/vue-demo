<template>
    <div style="margin:0 0 0 50px;width:1000px">
      <span class="movie-right">电影</span>
      <el-select v-model="value6" placeholder="请选择">
          <el-option
            v-for="item in rows"
            :key="item._id"
            :label="item.cName"
            :value="item._id"
            >
            <span style="float: left">{{ item.cName }}</span> -->
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.eName }}</span>
          </el-option>
      </el-select>
        <span class="movie-right movie-left">影院</span>
       <el-select v-model="value5" placeholder="请选择">
          <el-option
            v-for="item in studio.rows"
            :key="item._id"
            :label="item.name"
            :value="item._id">
            <span  @click="studioId(item._id)" style="float: left">{{ item.name }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.index }}</span>
          </el-option>
      </el-select>

       <span class="movie-right movie-left">影厅</span>
       <el-select v-model="value4" placeholder="请选择">
          <el-option
            v-for="item in theater.data"
            :key="item._id"
            :label="item.name"
            :value="item._id">
            <span style="float: left">{{ item.name }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
      </el-select>
        <p></p>
        <div class="block">
            <span class="movie-right">时间</span>
             <el-date-picker
              v-model="value3"
              style="width:200px"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
         <span class="movie-right movie-left">票价</span>
         <el-input style="width:200px" v-model="value2" placeholder="请输入内容"></el-input>
        </div>
        <p style="margin-top:50px; text-align:center">
          <el-button :plain="true" @click="save" type="primary">保存</el-button>
        </p>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: 'Schedule',
  data () {
    return {
        value6: '',
        value5: '',
        value4: '',
        value3: '',
        value2: '',
    }
  },
  computed:{
     ...mapState("schedules", ["rows","studio","theater"])
  },
  methods:{
    GMTToStr(time){
    let date = new Date(time)
    let Str=date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' + 
    date.getDate() + ' ' + 
    date.getHours() + ':' + 
    date.getMinutes() + ':' + 
    date.getSeconds()
    return Str
},
    save(e){
      const movieId = this.value6
      const studioId = this.value5
      const theaterId = this.value4
      const showTime = this.GMTToStr(this.value3)
      const price = this.value2
      if(studioId!=""&&
          movieId!="" &&
          theaterId!="" &&
          showTime!="" &&
          price!=""){
              this.$store.dispatch({
              type:"schedules/asyncCreate",
                    studioId,
                    movieId,
                    theaterId,
                    showTime,
                    price
            })
            this.$message('保存成功');
              }else{
                 this.$message('数据为空');
                  e.preventDefault()
              }
        
     
    },
   
    studioId(studioId){
      this.getTheater(studioId)
    },
    getMovie(){
      this.$store.dispatch({
        type:"schedules/getMovie"
      })
    },
    getStudio(){
      this.$store.dispatch({
         type:"schedules/getStudio"
      })
    },
    getTheater(studioId){
      this.$store.dispatch({
         type:"schedules/getTheater",
         studioId
      })
    }
  },
  mounted() {
    this.getMovie();
    this.getStudio();
  }
}
</script>
<style>
    .movie-right{
      margin-right:20px
    }
    .movie-left{
      margin-left:30px
    }
</style>
