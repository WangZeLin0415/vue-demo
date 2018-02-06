<template>
 <el-table
      :data="rows"
      style="width: 100%;margin-left:50px">
      <el-table-column
        prop="show_time"
        label="时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="price"
        label="票价"
        width="180">
      </el-table-column>
       <el-table-column
          label="操作"
          width="200">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClickMovie(scope.row)" type="text" size="small">放映厅查寻</el-button> -->
            <el-button @click="handleClickDel(scope.row)" type="text" size="small">删除</el-button>
          </template>
          </el-table-column>
    </el-table>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: 'ShowTime',
  data () {
    return {
      curPage:1,
      eachPage:10
    }
  },
  computed:{
    ...mapState("showTime",["rows"])
  },
  methods:{
      handleClickDel(row){
         this.$store.dispatch({
             type:"showTime/handleClickDel",
             showTime:row.showTime
         })
         this.getShowTime()
      },
   getShowTime(){
       this.$store.dispatch({
           type:"showTime/getShowTime",
           page:this.curPage,
           rows:this.eachPage,
           theaterId:this.$route.params.theaterId,
           showTime:this.$route.params.showTime
       })
   }
    
  },
  mounted(){
      this.getShowTime()
  }
}
</script>