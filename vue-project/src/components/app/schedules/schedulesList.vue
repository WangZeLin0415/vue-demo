 <template>
 <div style="margin-left:50px">
   <p></p>
   <p>
     <el-button v-if="isType"  type="success" @click="prevDay">前一天</el-button>
      <el-button v-else  type="danger">前一天</el-button>
      <el-button v-if="isType1" type="success" @click="curDay">今天</el-button>
      <el-button v-else type="danger">今天</el-button>
      <el-button v-if="isType2" type="success" @click="nextDay">明天</el-button>
      <el-button v-else type="danger">明天</el-button>
   </p>
    <el-table
      :data="schedules.rows"
      style="width: 100%;">
      <el-table-column
        prop="cName"
        label="电影名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="country"
        label="国家"
        width="200">
      </el-table-column>
       <el-table-column
        prop="type"
        label="类型"
        width="200">
      </el-table-column>
          <el-table-column
         
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleClickMovie(scope.row)" type="text" size="small">查看排片影院</el-button>
          </template>
          </el-table-column>
      </el-table>
      </div>
  </template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
const moment = require("moment")
export default {
  name: "ScheduleList",
  data() {
    return {
      curPage: 1,
      eachPage: 10,
      showTime: this.GMTToStr(new Date()),
      isType: true,
      isType1: false,
      isType2: true
    };
  },
  computed: {
    ...mapState("schedules", ["movieId", "schedules"])
  },
  mounted() {
    const showTime = this.showTime;
    this.getSchedules(showTime);
  },
  methods: {
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
    prevDay() {
      this.isType = false;
      (this.isType1 = true), (this.isType2 = true);
      this.showTime = new Date(
        new Date(new Date().setDate(new Date().getDate() - 1)).setHours(0,0,0,0)
      );
      const showTime = this. GMTToStr(this.showTime)
      this.getSchedules(showTime);
    },
    curDay() {
        this.isType = true;
      (this.isType1 = false), (this.isType2 = true);
      this.showTime = this.GMTToStr(new Date());
      const showTime = this.showTime;
      this.getSchedules(showTime);
    },
    nextDay() {
        this.isType = true;
      (this.isType1 = true), (this.isType2 = false);
      this.showTime = new Date(
        new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0,0,0,0)
      );
     const showTime = this. GMTToStr(this.showTime)
      this.getSchedules(showTime);
    },
    handleClickMovie(row) {
      this.$router.push({
        name: "ScheduleMovie",
        params: {
          movieId: row._id,
          showTime: this.showTime
        }
      });
    },
    getSchedules(showTime) {
      this.$store.dispatch({
        type: "schedules/getSchedules",
        page: this.curPage,
        rows: this.eachPage,
        showTime
      });
    }
  }
};
</script>
