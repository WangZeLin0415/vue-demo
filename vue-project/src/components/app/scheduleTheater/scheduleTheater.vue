<template>
 <el-table
      :data="rows"
      style="width: 100%;margin-left:50px">
      <el-table-column
        prop="name"
        label="影厅名称"
        width="180">
      </el-table-column>
       <el-table-column
          label="操作"
          width="200">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClickMovie(scope.row)" type="text" size="small">放映厅查寻</el-button> -->
            <el-button @click="handleClickShowTime(scope.row)" type="text" size="small">查看时间</el-button>
          </template>
          </el-table-column>
    </el-table>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: 'ScheduleTheater',
  data () {
    return {
      curPage:1,
      eachPage:10
    }
  },
  computed:{
    ...mapState("scheduleTheater",["rows"])
  },
  methods:{
    handleClickShowTime(row){
        this.$router.push({
          name:"ShowTime",
          params:{
            theaterId:row._id,
            showTime:this.$route.params.showTime
          }
        })
    },
    getThertaersPage(){
      this.$store.dispatch({
        type:"scheduleTheater/getThertaersPage",
        page:this.curPage,
        rows:this.eachPage,
        studioId:this.$route.params.studioId,
        showTime:this.$route.params.showTime
      })
    }
  },
  mounted(){
   this.getThertaersPage()
  }
}
</script>