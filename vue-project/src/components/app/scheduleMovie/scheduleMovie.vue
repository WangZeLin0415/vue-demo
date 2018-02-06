<template>
 <el-table
      :data="rows"
      style="width: 100%;margin-left:50px">
      <el-table-column
        prop="name"
        label="影院名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
         width="400">
      </el-table-column>
       <el-table-column
          label="操作"
          width="200">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClickMovie(scope.row)" type="text" size="small">放映厅查寻</el-button> -->
            <el-button @click="handleClickTheater(scope.row)" type="text" size="small">查看放映厅</el-button>
          </template>
          </el-table-column>
    </el-table>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: 'ScheduleMovie',
  data () {
    return {
      curpage:1,
      eachPage:5,
    }
  },
  computed:{
    ...mapState("scheduleMovie",["rows"])
  },
  methods:{
    handleClickTheater(row){
       this.$router.push({
        name: "ScheduleTheater",
        params: {
          studioId: row._id,
          showTime:this.$route.params.showTime
        }
      })
    },
    getSchedulesMovie(){
      this.$store.dispatch({
        type:"scheduleMovie/getSchedulesMovie",
        page:this.curpage,
        rows:this.eachPage,
        movieId:this.$route.params.movieId,
        showTime:this.$route.params.showTime

      })
    }
  },
  mounted(){
    this.getSchedulesMovie()
  }
}
</script>